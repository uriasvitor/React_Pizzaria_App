import { Request, Response} from 'express'
import { CreateProcutService } from '../../services/product/CreateProductService'

class CreateProductController{
    async handle(req:Request, response:Response){
        const { name,price,description,banner,category_id} = req.body
        const createProcutService = new CreateProcutService();

        if(!req.file){
            throw new Error("error upload file")
        }else{
            const { originalname, filename: banner} = req.file

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
}


export {CreateProductController}