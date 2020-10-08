"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var authController = new authController_1.AuthController();
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
     */
    AuthRouter.prototype.routes = function () {
        this.router.post('/user/signin', authController.signin);
        this.router.get('/user/logout', authController.logout);
    };
    /**
     * getRouter=> metodo que devulve el objeto router creado para usar en express
     */
    AuthRouter.prototype.getRouter = function () {
        return this.router;
    };
    return AuthRouter;
}());
exports.AuthRouter = AuthRouter;
