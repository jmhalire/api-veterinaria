import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet"
import bodyParser from "body-parser";
import passport from "passport"

//importamos todas las rutas que existen para agregar a express
import { IndexRouter } from "./routes/index";
import { AuthRouter } from "./routes/auth"
import { UserRouter } from "./routes/user"
import { ClientRouter } from "./routes/client";
import { MascotRouter } from "./routes/mascot";
import { ServiceRouter } from "./routes/service";
import { VentaRouter } from "./routes/venta";
import { InventarioRouter } from "./routes/inventario";
import { ReportRouter } from "./routes/reportRouter";


import { PassportClass } from "./controllers/passport";

//creamos los objetos de las clases de routes
const indexRouter = new IndexRouter();
const userRouter = new UserRouter();
const authRouter = new AuthRouter();
const clientRouter = new ClientRouter();
const mascotRouter = new MascotRouter();
const serviceRouter = new ServiceRouter();
const ventaRouter = new VentaRouter();
const inventarioRouter = new InventarioRouter();
const reportRouter = new ReportRouter();

const passportClass = new PassportClass()

export class App {

    private app: Application;
    private port: string | number;
    constructor(){
        this.port = process.env.PORT || 8080;
        this.app = express();
        this.settings();
        this.middlewares();
        this.Routes()        
    }

    /**
     * settings
     */
    public settings(): void {
        this.app.set('port',this.port)
    }

    /**
     * middlewares
     */
    public middlewares(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(passport.initialize());
        passport.use(passportClass.strategy())
    }

    /**
     * Routes
     */
    public Routes(): void {
        this.app.use(indexRouter.getRouter());
        this.app.use(authRouter.getRouter());
        this.app.use(userRouter.getRouter());
        this.app.use(clientRouter.getRouter());
        this.app.use(mascotRouter.getRouter());
        this.app.use(serviceRouter.getRouter());
        this.app.use(ventaRouter.getRouter());
        this.app.use(inventarioRouter.getRouter());
        this.app.use(reportRouter.getRouter());

    }

    /**
     * startServer (metodo que inia nuestro servidor)
     */
    public startServer(): void {
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server on port: ${this.app.get('port')}`)
        });
    }
}