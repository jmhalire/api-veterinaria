import { Router } from "express";
import { MacotaController } from "../controllers/mascotaController";
import { PassportClass } from "../controllers/passport";

const passport = new PassportClass()
const mascotCrtl = new MacotaController()

export class MascotRouter {

    private router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(): void{
        this.router.get( '/mascot/list',passport.Authenticate(), mascotCrtl.getMascotas);
        this.router.get( '/mascot/:id', passport.Authenticate(), mascotCrtl.getMascota );
        this.router.post( '/mascot/add', passport.Authenticate(), mascotCrtl.createMascota)
        this.router.post( '/mascot/edit', passport.Authenticate(), mascotCrtl.updateMascota );
        this.router.delete( '/mascot/delete/:id', passport.Authenticate(), mascotCrtl.deleteMascota);
    }

    /**
     * name
     */
    public getRouter(): Router {
        return this.router;
    }
}