import Button from '../../components/ui/Button/Index'; 
import Input from '../../components/ui/Input'; 
import Head from 'next/head';
import logo_img from   '../../../public/logo.svg'
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import { FormEvent, useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

export default function SignUp() {
  const {signUp} = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(e:FormEvent){
    e.preventDefault()


    if(name ==='' || email === '' || password ===''){
      toast.warn("Por favor, preencha todos os campos.")
      return;
    }

    setLoading(true)


    let data = {
      name,
      email,
      password
    }
  
    await signUp(data)
    
    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Sujeito Homem - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo_img} alt="Logo Sujeito Pizzaria"></Image>

        <div className={styles.login}>
          <h1>Criar conta</h1>


          <form onSubmit={handleSignUp}>
            <Input
              placeholder='Digite seu nome'
              type='text'
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <Input
              placeholder='Digite seu email'
              type='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <Input
              placeholder='Digite sua Senha'
              type='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça o Login!</a>
            </Link>
        </div>
      </div>

    </>
  )
}
