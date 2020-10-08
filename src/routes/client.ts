import { Response, Request, Router } from "express";
import { ClientController } from "../controllers/clientController";
import { PassportClass } from "../controllers/passport";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const clientCrtl = new ClientController()
const passport = new PassportClass();

export class ClientRouter {

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
        this.router.get('/client/count',passport.Authenticate(), clientCrtl.countClient)
        this.router.get('/client/list',passport.Authenticate(), clientCrtl.getClients);
        this.router.get('/client/:id', passport.Authenticate(), clientCrtl.getClientMascotas);
        this.router.post('/client/add', passport.Authenticate(), clientCrtl.createClient)
        this.router.post('/client/edit', passport.Authenticate(), clientCrtl.updateClient );
        this.router.delete('/client/delete/:id', passport.Authenticate(), clientCrtl.deleteClient);
    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}