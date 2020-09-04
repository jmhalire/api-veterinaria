import { PassportClass } from "../controllers/passport";
import { Router } from "express";
import { ServiController } from "../controllers/serviController";

const service = new ServiController();
const passport = new PassportClass()


export class ServiceRouter {

    private router: Router
    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void{
        this.router.get( '/visita/lista', passport.Authenticate(), service.listaVisitas)
        this.router.post( '/visita/add', passport.Authenticate(), service.addVisita);
        this.router.post( '/vacuna/add', passport.Authenticate(), service.addVacuna);
        
    }

    public getRouter(): Router{
        return this.router;
    }
}