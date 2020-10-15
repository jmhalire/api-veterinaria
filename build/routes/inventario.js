"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioRouter = void 0;
var express_1 = require("express");
var passport_1 = require("../controllers/passport");
var inventarioController_1 = require("../controllers/inventarioController");
var role_1 = require("../middlewares/role");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var inventarioCrtl = new inventarioController_1.InventarioController();
var passport = new passport_1.PassportClass();
var roleAdmin = new role_1.AuthRole('admin');
var InventarioRouter = /** @class */ (function () {
    function InventarioRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    InventarioRouter.prototype.routes = function () {
        //articulos
        this.router.post('/article/save', passport.Authenticate(), roleAdmin.verificate, inventarioCrtl.saveArticulo);
        this.router.get('/article/list', passport.Authenticate(), inventarioCrtl.getArticulos);
        this.router.get('/article/:id', passport.Authenticate(), inventarioCrtl.getProducto);
        this.router.post('/article/updated-stock', passport.Authenticate(), inventarioCrtl.updatedStock);
        //categorias
        this.router.post('/categoria/save', passport.Authenticate(), roleAdmin.verificate, inventarioCrtl.saveCategoria);
        this.router.get('/categoria/list', passport.Authenticate(), inventarioCrtl.getCategorProducts);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    InventarioRouter.prototype.getRouter = function () {
        return this.router;
    };
    return InventarioRouter;
}());
exports.InventarioRouter = InventarioRouter;
