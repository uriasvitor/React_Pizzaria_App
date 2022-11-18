import prisma from "../../prisma"

interface ItemRequest{
    item_id:string
}

class RemoveItemService{
    async execute({item_id}:ItemRequest){
        const order = await prisma.item.delete({
            where:{
                id:item_id
            }
        })

        return order;
    }
}

export { RemoveItemService }