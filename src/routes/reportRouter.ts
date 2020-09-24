import { Router } from "express";
import { PassportClass } from "../controllers/passport";
import { ReporteController } from "../controllers/reporteController";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const reportCrtl = new ReporteController()
const passport = new PassportClass();

export class ReportRouter {

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
        
        this.router.get('/report/product-favory',passport.Authenticate(), reportCrtl.getProductFavory);
        this.router.get('/weather', reportCrtl.getWether);


    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}