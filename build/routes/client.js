"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRouter = void 0;
var express_1 = require("express");
var clientController_1 = require("../controllers/clientController");
var passport_1 = require("../controllers/passport");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var clientCrtl = new clientController_1.ClientController();
var passport = new passport_1.PassportClass();
var ClientRouter = /** @class */ (function () {
    function ClientRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    ClientRouter.prototype.routes = function () {
        this.router.get('/client/list', passport.Authenticate(), clientCrtl.getClients);
        this.router.get('/client/:id', passport.Authenticate(), clientCrtl.getClient);
        this.router.post('/client/add', passport.Authenticate(), clientCrtl.createClient);
        this.router.post('/client/edit', passport.Authenticate(), clientCrtl.updateClient);
        this.router.delete('/client/delete/:id', passport.Authenticate(), clientCrtl.deleteClient);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    ClientRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ClientRouter;
}());
exports.ClientRouter = ClientRouter;
