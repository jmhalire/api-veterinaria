import { verify } from "crypto";
import { Router } from "express";
import { PassportClass } from "../controllers/passport";
import { ReporteController } from "../controllers/reporteController";
import { AuthRole } from "../middlewares/role";



// se crea una instancia o un objeto de Auth para utilizar en la clase
const reportCrtl = new ReporteController()
const passport = new PassportClass();
const roleAdmin = new AuthRole('admin');


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
        
        this.router.get('/report/ingreso-meses', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getIngresoXmeses);
        this.router.get('/report/ingreso-hoy', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getIngresoHoy);
        this.router.get('/report/visita-meses', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getvisitasXmeses);
        this.router.get('/report/top_10_product', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getProductFavory);
        this.router.get('/weather', reportCrtl.getWether);
    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}