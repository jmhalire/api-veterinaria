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
        this.router.post( '/cita/add', passport.Authenticate(), service.addCita)
        this.router.get( '/cita/lista', passport.Authenticate(), service.listaCitas)
    }

    public getRouter(): Router{
        return this.router;
    }
}