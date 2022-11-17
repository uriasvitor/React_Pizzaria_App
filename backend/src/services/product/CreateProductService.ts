import prisma from "../../prisma"

interface ProductRequest{
    name:string,
    price:string;
    description:string;
    banner:string;
    category_id:string
}

class CreateProcutService{
    async execute({name,price,description,banner,category_id}:ProductRequest){

        return {ok:true}
    }
}


export { CreateProcutService }