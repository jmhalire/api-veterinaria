"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var usuario_1 = require("../models/usuario");
var jwt_1 = require("../middlewares/jwt");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    //metodo login
    AuthController.prototype.signin = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datosResponse, _a, Email, Password, user, token, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        datosResponse = void 0;
                        _a = req.body, Email = _a.Email, Password = _a.Password;
                        if (!(Email && Password)) {
                            datosResponse = {
                                value: false,
                                message: 'usuario y contraseña requerido',
                                token: '',
                            };
                            return [2 /*return*/, res.status(400).json(datosResponse)];
                        }
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne({ Email: Email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            datosResponse = {
                                value: false,
                                message: 'correo incorrecto',
                                token: ''
                            };
                            return [2 /*return*/, res.status(400).json(datosResponse)];
                        }
                        if (!user.validPassword(Password)) {
                            datosResponse = {
                                value: false,
                                message: 'contraseña incorrecta',
                                token: ''
                            };
                            return [2 /*return*/, res.status(400).json(datosResponse)];
                        }
                        token = new jwt_1.Jsonwebtoken(user).createToken();
                        datosResponse = {
                            value: true,
                            message: '',
                            token: token
                        };
                        return [2 /*return*/, res.json(datosResponse)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
