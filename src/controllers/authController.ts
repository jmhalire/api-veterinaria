import { Request, Response } from "express"
import { getRepository, IsNull } from "typeorm";
import { User } from "../models/usuario";
import { Jsonwebtoken } from "../middlewares/jwt";

//interfaces
import { LoginResponse } from "../interfaces/loginResponse";

export class AuthController {

    constructor() { }


    //metodo login
    public async signin(req: Request, res: Response): Promise<Response> {
        try {
            let datosResponse: LoginResponse;
            const { Email, Password } = req.body;
            if(!(Email && Password)){
                datosResponse = {
                    value : false,
                    message: 'usuario y contraseña requerido',
                    token : '',
                }
                return res.status(400).json(datosResponse)
            }

            const user = await getRepository(User).findOne({Email})

            if(!user){
                datosResponse = {
                    value : false,
                    message: 'correo incorrecto',
                    token : ''
                }
                return res.status(400).json(datosResponse)
            }
            if(!user.validPassword(Password)){
                datosResponse = {
                    value : false,
                    message: 'contraseña incorrecta',
                    token : ''
                }
                return res.status(400).json(datosResponse)
            }
            //creamos su toke del usuario registrado
            const token =  new Jsonwebtoken(user).createToken();
           
            datosResponse = {
                value : true,
                message: '',
                token: token
            }

            return res.json(datosResponse);

        } catch (error) {
            return res.status(404).json(error)
        }
    }
}