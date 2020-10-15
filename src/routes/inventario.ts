import { Router } from "express";
import { VentaController } from "../controllers/ventaController";
import { PassportClass } from "../controllers/passport";
import { InventarioController } from "../controllers/inventarioController";
import { AuthRole } from "../middlewares/role";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const inventarioCrtl = new InventarioController()
const passport = new PassportClass();
const roleAdmin = new AuthRole('admin');

export class InventarioRouter {

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
        
        //articulos
        this.router.post('/article/save', passport.Authenticate(), roleAdmin.verificate,  inventarioCrtl.saveArticulo)

        this.router.get('/article/list', passport.Authenticate(), inventarioCrtl.getArticulos);
        this.router.get('/article/:id', passport.Authenticate(), inventarioCrtl.getProducto);
        this.router.post('/article/updated-stock', passport.Authenticate(), inventarioCrtl.updatedStock);

        //categorias
        this.router.post('/categoria/save', passport.Authenticate(), roleAdmin.verificate, inventarioCrtl.saveCategoria)
        this.router.get('/categoria/list', passport.Authenticate(), inventarioCrtl.getCategorProducts)

    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}