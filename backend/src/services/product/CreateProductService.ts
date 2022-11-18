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

        const product = await prisma.product.create({
            data:{
                name:name,
                price:price,
                description: description,
                banner:banner,
                category_id: category_id
            }
        })
        return product
    }
}


export { CreateProcutService }