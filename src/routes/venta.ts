import { Router } from "express";
import { VentaController } from "../controllers/ventaController";
import { PassportClass } from "../controllers/passport";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const ventaCrtl = new VentaController()
const passport = new PassportClass();

export class VentaRouter {

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
        
        this.router.get('/venta/list',passport.Authenticate(), ventaCrtl.getVentas);
        this.router.get('/venta/:id',passport.Authenticate(), ventaCrtl.getVenta);
        this.router.post('/venta/save', passport.Authenticate(), ventaCrtl.saveVenta);

        //articulos
        this.router.post('/article/save', passport.Authenticate(), ventaCrtl.saveArticulo);
        this.router.get('/article/list', passport.Authenticate(), ventaCrtl.getArticulos)

        //proveedores
        this.router.post('/proveedor/save', passport.Authenticate(), ventaCrtl.saveProveedor)
        this.router.get('/proveedor/list', passport.Authenticate(), ventaCrtl.getProveedores)

        //categorias
        this.router.get('/categoria/list', passport.Authenticate(), ventaCrtl.getCategorProducts)

    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}