import {  Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';


class ListCategoryController{
    async handle(req:Request, res:Response){

        const listCategoryController = new ListCategoryService();

        const category = await listCategoryController.execute();

        return res.json(category)
    }
}

export {ListCategoryController}