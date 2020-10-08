"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaRouter = void 0;
var express_1 = require("express");
var ventaController_1 = require("../controllers/ventaController");
var passport_1 = require("../controllers/passport");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var ventaCrtl = new ventaController_1.VentaController();
var passport = new passport_1.PassportClass();
var VentaRouter = /** @class */ (function () {
    function VentaRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    VentaRouter.prototype.routes = function () {
        this.router.get('/venta/list', passport.Authenticate(), ventaCrtl.getVentas);
        this.router.get('/venta/:id', passport.Authenticate(), ventaCrtl.getVenta);
        this.router.post('/venta/save', passport.Authenticate(), ventaCrtl.saveVenta);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    VentaRouter.prototype.getRouter = function () {
        return this.router;
    };
    return VentaRouter;
}());
exports.VentaRouter = VentaRouter;
