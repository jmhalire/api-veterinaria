import { Request, Response } from "express"
import { getRepository, IsNull } from "typeorm";
import { User } from "../models/usuario";
import { Jsonwebtoken } from "../middlewares/jwt";


export class AuthController {

    constructor() { }


    //metodo login
    public async signin(req: Request, res: Response): Promise<Response> {
        try {
            //se obtiene los datos de req.body
            const { Email, Password } = req.body;
            if(!(Email && Password)){
                return res.status(400).json({value : false, message: 'usuario y contraseña requerido'})
            }
            const user = await getRepository(User).findOne({Email})

            if(!user){
                return res.status(400).json({value : false, message: 'correo incorrecto'})
            }
            if(!user.validPassword(Password)){
                return res.status(400).json({value : false, message: 'contraseña incorrecta'})
            }
            //creamos su toke del usuario registrado
            const token =  new Jsonwebtoken(user).createToken();
           
            //se devuelve los datos a la appp cliente
            let datosResponse = {
                value : true,
                token: token,
                user: {
                    Names: user.Names,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                    Role: user.Role
                }
            }
            return res.json(datosResponse);
        } catch (error) {
            return res.status(404).json(error)
        }
    }

    public logout(req: Request, res: Response) {
        req.logout();
        return res.status(201).json({message:'Usted cerró sesión en el sistema. Gracias'})
    }
}