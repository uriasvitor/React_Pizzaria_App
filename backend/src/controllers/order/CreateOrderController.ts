import {Request, Response} from 'express'
import { CreateOrderServer } from '../../services/order/CreateOrderService'

class CreateOrderController{
    async handle(req:Request, res:Response){

        const {table, name} = req.body

        const createOrderService = new CreateOrderServer();
        
        const order = await createOrderService.execute({
            table,
            name
        })


        return res.json(order)
    }
}

export { CreateOrderController }