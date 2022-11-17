import { Request, Response} from 'express'
import { CreateProcutService } from '../../services/product/CreateProductService'

class CreateProductController{
    async handle(req:Request, response:Response){
        const { name,price,description,banner,category_id} = req.body
        const createProcutService = new CreateProcutService();

        const product = await createProcutService.execute({
            name,
            price,
            description,
            banner,
            category_id,
        });

        return response.json(product)
    }
}


export {CreateProductController}