import { Router } from "express";
import { UserController } from "../controllers/userController";
import { PassportClass } from "../controllers/passport";
import { AuthRole } from "../middlewares/role";

// se crea una instancia o un objeto de Auth para utilizar en la clase
const userCrtl = new UserController()
const passport = new PassportClass();
const roleAdmin = new AuthRole('admin');
const roleCliente = new AuthRole('cliente');

export class UserRouter {

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
        this.router.post( '/user/create', passport.Authenticate(), roleAdmin.verificate, userCrtl.createUser);
        this.router.get( '/user/list', passport.Authenticate(), roleAdmin.verificate, userCrtl.getUsers );
        this.router.post( '/user/edit', passport.Authenticate(), roleAdmin.verificate, userCrtl.updateUser );
        this.router.delete( '/user/delete/:id', passport.Authenticate(), roleAdmin.verificate, userCrtl.deleteUser);
        this.router.get('/user',passport.Authenticate(), userCrtl.getUser);
    }

    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    public getRouter(): Router {
        return this.router;
    }
}