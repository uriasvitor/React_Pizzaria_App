import prisma from "../../prisma"

interface OrderRequest{
    table: number;
    name: string
}

class CreateOrderServer{
    async execute({table, name}:OrderRequest){

        const order = await prisma.order.create({
            data:{
                table:table,
                name:name
            }
        })


        return order;
    }
}

export {    CreateOrderServer   }