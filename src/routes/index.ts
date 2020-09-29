import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/usuario";

export class IndexRouter {

    private router: Router;

    constructor() {
        //inicializamos el authControllerrouter
        this.router = Router()
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }

    /**
     * routes 
     */
    private routes():void {
        this.router.get('/',(req,res)=>{
            res.send('bienvenidos')
        });
        this.router.get('/index', async (req,res)=>{
            try {
                const users = await getRepository(User).find({
                    select: ["id", "Names", "FirstName", "LastName", "Celular", "Address", "Email", "Role", "CreatedAt", "UpdatedAt"],
                    where: { Estado: 1 }
            
                });
                if (users.length > 0) {
                    return res.json(users);
                } else {
                    return res.status(400).json({ message: 'no hay resultados' });
                }
            } catch (error) {
                return res.status(404).json({ error });
            }
        });
    }

    /**
     * getRouter=> metodo que devulve el objeto router creado para usar en express
     */
    public getRouter(): Router {
        return this.router;
    }
}