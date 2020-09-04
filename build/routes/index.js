"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRouter = void 0;
var express_1 = require("express");
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        //inicializamos el authControllerrouter
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
     */
    IndexRouter.prototype.routes = function () {
        this.router.get('/', function (req, res) {
            res.send('bienvenidos');
        });
    };
    /**
     * getRouter=> metodo que devulve el objeto router creado para usar en express
     */
    IndexRouter.prototype.getRouter = function () {
        return this.router;
    };
    return IndexRouter;
}());
exports.IndexRouter = IndexRouter;
