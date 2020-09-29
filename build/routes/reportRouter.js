"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRouter = void 0;
var express_1 = require("express");
var passport_1 = require("../controllers/passport");
var reporteController_1 = require("../controllers/reporteController");
var role_1 = require("../middlewares/role");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var reportCrtl = new reporteController_1.ReporteController();
var passport = new passport_1.PassportClass();
var roleAdmin = new role_1.AuthRole('admin');
var ReportRouter = /** @class */ (function () {
    function ReportRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    ReportRouter.prototype.routes = function () {
        this.router.get('/report/ingreso-meses', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getIngresoXmeses);
        this.router.get('/report/ingreso-hoy', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getIngresoHoy);
        this.router.get('/report/visita-meses', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getvisitasXmeses);
        this.router.get('/report/product-favory', passport.Authenticate(), roleAdmin.verificate, reportCrtl.getProductFavory);
        this.router.get('/weather', reportCrtl.getWether);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    ReportRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ReportRouter;
}());
exports.ReportRouter = ReportRouter;
