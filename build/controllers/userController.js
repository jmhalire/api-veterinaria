"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var usuario_1 = require("../models/usuario");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    //CREAR UN NUEVO USUARIO
    UserController.prototype.createUser = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datos, user, newUser, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        datos = req.body;
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne({ Email: datos.Email })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, res.status(404).json({ message: "Ya existe usuario con ese correo!!!" })];
                        }
                        newUser = typeorm_1.getRepository(usuario_1.User).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).save(newUser)
                            /* //creamos su toke del usuario registrado
                            const token = new Jsonwebtoken(UserDate).createToken(); */
                        ];
                    case 2:
                        _a.sent();
                        /* //creamos su toke del usuario registrado
                        const token = new Jsonwebtoken(UserDate).createToken(); */
                        return [2 /*return*/, res.status(200).json({ message: "El usuario " + datos.Names + " ha sido creado" })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS USUARIOS
    UserController.prototype.getUsers = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('aqui');
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).find({
                                select: ["id", "Names", "FirstName", "LastName", "Celular", "Address", "Email", "Role", "CreatedAt", "UpdatedAt"]
                            })];
                    case 1:
                        users = _a.sent();
                        console.log('asdmvldsmdmmlmqui');
                        if (users.length > 0) {
                            return [2 /*return*/, res.json(users)];
                        }
                        else {
                            return [2 /*return*/, res.status(400).json({ message: 'no hay resultados' })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //EDITAR USUARIO
    UserController.prototype.updateUser = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, user, userUpdate, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        id = req.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 4];
                        typeorm_1.getRepository(usuario_1.User).merge(user, req.body);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).save(user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne(id, {
                                select: ["id", "Names", "FirstName", "LastName", "Celular", "Address", "Email", "Role", "CreatedAt", "UpdatedAt"]
                            })];
                    case 3:
                        userUpdate = _a.sent();
                        return [2 /*return*/, res.json({ mesaage: 'Los datos del usuario han sido modificados', userUpdate: userUpdate })];
                    case 4: return [2 /*return*/, res.status(404).json({ message: "No existe usuario" })];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.json(error_3)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //ELIMINAR UN USUARIO
    UserController.prototype.deleteUser = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).delete(req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: "usuario elimninado!!" })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.json(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
