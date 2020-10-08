import { Router } from "express";
import { ProveedController } from "../controllers/proveedController";
import { PassportClass } from "../controllers/passport";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const proveedCrtl = new ProveedController()
const passport = new PassportClass();

export class ProveedRouter {

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
        this.router.get('/proveed/count',passport.Authenticate(), proveedCrtl.countProveed)
        this.router.get('/proveed/list',passport.Authenticate(), proveedCrtl.getProveeds);
        this.router.get( '/proveed/:id', passport.Authenticate(), proveedCrtl.getProveed );
        this.router.post('/proveed/add', passport.Authenticate(), proveedCrtl.createProveed)
        this.router.post('/proveed/edit', passport.Authenticate(), proveedCrtl.updateProveed );
        this.router.delete('/proveed/delete/:id', passport.Authenticate(), proveedCrtl.deleteProveed);

    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}