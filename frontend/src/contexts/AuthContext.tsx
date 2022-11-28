import { createContext, ReactNode, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { api } from "../services/errors/apiClient";
import Router  from 'next/router'
import { toast } from "react-toastify";

type AuthContextData = {
    user?: UserProps;
    isAuthenticated: boolean;
    signIn:(credentials: SignInProps) => Promise<void>;
    signOut:() => void;
    signUp: (credentials: SignUpProps) => Promise<void>;

}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name:string,
    email:string,
    password:string;
}

type AuthProviderProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try{
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    }catch{
        console.log('Erro ao deslogar')
    }
}


export function AuthProvider({children}:AuthProviderProps){
    
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user; 
    
    useEffect(()=>{
        const {'@nextauth.token':token} = parseCookies();

        if(token){
            api.get('/me').then((response)=>{
                console.log(response)
                const { id, name, email} = response.data;

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch((err)=>{
                console.log(err)
                signOut();
            })
        }
    })

    async function signIn({email, password}:SignInProps){
        try{
            const response = await api.post('/session',{
                email,
                password
            })
            const { id, name, token} = response.data
            setCookie(undefined, '@nextauth.token', response.data.token,{
                maxAge: 10 * 10 * 10 * 10,
                path:"/"
        })

        setUser({
            id,
            name,
            email
        })
        
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        
        toast.success("Logado Com Sucesso!")

        Router.push("/dashboard")
        
        console.log(response.data)
        
        }catch(err){
            toast.error("Erro Ao Acessar!")
            console.log('err')
        }
    }

    async function signUp({name, email, password}:SignUpProps){
        try{
            const response = await api.post('/users', {
                name,
                email,
                password
            })
            
            toast.success("Cadastrado Com Sucesso!")
            console.log(response)

            Router.push('/')
        }catch(err){
            toast.error("Erro Ao Cadastrar")
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
                {children}
            </AuthContext.Provider>
        )
}