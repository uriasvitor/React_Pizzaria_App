import { NextFunction, Request, Response } from "express";
import { verify} from 'jsonwebtoken'

interface Paylood{
    sub:String
}

export function isAuth(
    req:Request,
    res:Response,
    next:NextFunction
){
    
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    console.log(token)

    try{
        const { sub } = verify(
            token,
            process.env.JWT_SECRET

        )as Paylood;

        console.log(sub)

        return next()

    }catch(err){
        return res.status(401).end()
    }
}