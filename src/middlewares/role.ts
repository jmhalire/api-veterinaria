import { Request, Response, NextFunction } from "express";
import { User } from "../models/usuario";

export class AuthRole {
    constructor(private role: string ){ }
    
    public verificate(req: Request, res: Response, nex: NextFunction){
        const user: User = <User>req.user;
        try {
            if(user.Role === 'ADMIN'){
                nex();
            } else{
                //status 401 no autorizado o puede ser 403 cliente no posee recursos
                return res.status(401).json({message: 'No estas autorizado para acceder a esta informacion o para realizar este proceso'});
                //return res.status(401).json('No estas autorizado para acceder a esta informacion o para realizar este proceso');
            }
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}