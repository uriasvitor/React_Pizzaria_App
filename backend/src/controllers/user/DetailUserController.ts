import { DetailUserService } from "../../services/user/DetailUserService";
import { Request, Response } from "express";


class DetailUserController{
    async handle(req:Request, res:Response){
        const detailUserController = new DetailUserService

        const user = await detailUserController.execute();

        return res.json(user)
    }
}

export { DetailUserController}