"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotRouter = void 0;
var express_1 = require("express");
var mascotaController_1 = require("../controllers/mascotaController");
var passport_1 = require("../controllers/passport");
var passport = new passport_1.PassportClass();
var mascotCrtl = new mascotaController_1.MacotaController();
var MascotRouter = /** @class */ (function () {
    function MascotRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    MascotRouter.prototype.routes = function () {
        this.router.get('/mascot/count', passport.Authenticate(), mascotCrtl.countMascota);
        this.router.get('/mascot/list', passport.Authenticate(), mascotCrtl.getMascotas);
        this.router.get('/mascot/:id', passport.Authenticate(), mascotCrtl.getMascota);
        this.router.post('/mascot/add', passport.Authenticate(), mascotCrtl.createMascota);
        this.router.post('/mascot/edit', passport.Authenticate(), mascotCrtl.updateMascota);
        this.router.delete('/mascot/delete/:id', passport.Authenticate(), mascotCrtl.deleteMascota);
    };
    /**
     * name
     */
    MascotRouter.prototype.getRouter = function () {
        return this.router;
    };
    return MascotRouter;
}());
exports.MascotRouter = MascotRouter;
