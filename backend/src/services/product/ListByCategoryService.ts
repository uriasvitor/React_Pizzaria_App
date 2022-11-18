import prisma from "../../prisma"

interface ProductRequest{
    category_id:string
}


class ListByCategoryService{
    async execute({category_id}:ProductRequest){
        const findByCategoy = await prisma.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCategoy;
    }
}

export { ListByCategoryService }