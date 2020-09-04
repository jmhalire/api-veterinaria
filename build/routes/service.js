"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
var passport_1 = require("../controllers/passport");
var express_1 = require("express");
var serviController_1 = require("../controllers/serviController");
var service = new serviController_1.ServiController();
var passport = new passport_1.PassportClass();
var ServiceRouter = /** @class */ (function () {
    function ServiceRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ServiceRouter.prototype.routes = function () {
        this.router.get('/visita/lista', passport.Authenticate(), service.listaVisitas);
        this.router.post('/visita/add', passport.Authenticate(), service.addVisita);
        this.router.post('/vacuna/add', passport.Authenticate(), service.addVacuna);
    };
    ServiceRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ServiceRouter;
}());
exports.ServiceRouter = ServiceRouter;
