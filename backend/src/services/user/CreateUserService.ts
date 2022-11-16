import { hash } from 'bcryptjs';
import prisma from '../../prisma'



interface UserRequest{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        if(userAlreadyExists){
            throw new Error("User Already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prisma.user.create({
            data:{
                name:name,
                email: email,
                password: passwordHash
            },
            select:{
                id:true,
                email:true,
                name:true
            }
        })

        return user;
    }
}

export { CreateUserService }