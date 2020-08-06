import {Request, Response} from 'express'

export function indexWelcome(req : Request, res : Response) : Response{
   
    return res.json({msg:"Welcome to my API"});
}