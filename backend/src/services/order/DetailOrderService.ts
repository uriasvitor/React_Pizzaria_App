import prisma from "../../prisma";

interface DetailRequest{
    order_id:string;
}


class DetailOrderService{
    async execute({order_id}:DetailRequest){
        const order = await prisma.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product:true,
                order:true
            }

        })

        return order;
    }
}

export {DetailOrderService}