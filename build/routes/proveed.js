"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedRouter = void 0;
var express_1 = require("express");
var proveedController_1 = require("../controllers/proveedController");
var passport_1 = require("../controllers/passport");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var proveedCrtl = new proveedController_1.ProveedController();
var passport = new passport_1.PassportClass();
var ProveedRouter = /** @class */ (function () {
    function ProveedRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    ProveedRouter.prototype.routes = function () {
        this.router.get('/proveed/count', passport.Authenticate(), proveedCrtl.countProveed);
        this.router.get('/proveed/list', passport.Authenticate(), proveedCrtl.getProveeds);
        this.router.get('/proveed/:id', passport.Authenticate(), proveedCrtl.getProveed);
        this.router.post('/proveed/add', passport.Authenticate(), proveedCrtl.createProveed);
        this.router.post('/proveed/edit', passport.Authenticate(), proveedCrtl.updateProveed);
        this.router.delete('/proveed/delete/:id', passport.Authenticate(), proveedCrtl.deleteProveed);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    ProveedRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ProveedRouter;
}());
exports.ProveedRouter = ProveedRouter;
