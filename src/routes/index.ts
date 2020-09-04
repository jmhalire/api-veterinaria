import { Router } from "express";

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
    }

    /**
     * getRouter=> metodo que devulve el objeto router creado para usar en express
     */
    public getRouter(): Router {
        return this.router;
    }
}