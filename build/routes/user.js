"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var passport_1 = require("../controllers/passport");
var role_1 = require("../middlewares/role");
// se crea una instancia o un objeto de Auth para utilizar en la clase
var userCrtl = new userController_1.UserController();
var passport = new passport_1.PassportClass();
var roleAdmin = new role_1.AuthRole('admin');
var roleCliente = new role_1.AuthRole('cliente');
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        //inicializamos el router
        this.router = express_1.Router();
        //se ejecuta el metodo routes() para  grabar todas las rutas
        this.routes();
    }
    /**
     * routes
    */
    UserRouter.prototype.routes = function () {
        this.router.post('/user/create', passport.Authenticate(), roleAdmin.verificate, userCrtl.createUser);
        this.router.get('/user/list', passport.Authenticate(), roleAdmin.verificate, userCrtl.getUsers);
        this.router.post('/user/edit', passport.Authenticate(), roleAdmin.verificate, userCrtl.updateUser);
        this.router.delete('/user/delete/:id', passport.Authenticate(), roleAdmin.verificate, userCrtl.deleteUser);
        this.router.get('/user', passport.Authenticate(), userCrtl.getUser);
    };
    /**
     * getRouter=> metodo que devuelve el objeto router creado para usar en express
    */
    UserRouter.prototype.getRouter = function () {
        return this.router;
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
