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
        this.router.get( '/visita/count', passport.Authenticate(), service.countVisita);
        this.router.get( '/visita/lista', passport.Authenticate(), service.listaVisitas);
        this.router.post( '/visita/add', passport.Authenticate(), service.addVisita);
        this.router.post( '/visita/update', passport.Authenticate(), service.updateVisita);
        this.router.post( '/vacuna/add', passport.Authenticate(), service.addVacuna);
        this.router.post( '/cita/add', passport.Authenticate(), service.addCita)
        this.router.get( '/cita/pendientes', passport.Authenticate(), service.listCitasPendient);
        this.router.get( '/cita/updated-state/:id', passport.Authenticate(), service.updateCitaState);

    }

    public getRouter(): Router{
        return this.router;
    }
}