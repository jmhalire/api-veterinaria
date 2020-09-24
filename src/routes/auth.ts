import { Router } from "express";
import { AuthController } from "../controllers/authController";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const authController = new AuthController()

export class AuthRouter {

    private router: Router;

    constructor() {
        //inicializamos el router
        this.router = Router()
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }

    /**
     * routes 
     */
    private routes():void {
        this.router.post('/user/signin',authController.signin);
        this.router.get('/user/logout', authController.logout);
    }

    /**
     * getRouter=> metodo que devulve el objeto router creado para usar en express
     */
    public getRouter(): Router {
        return this.router;
    }
}