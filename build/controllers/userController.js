"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var typeorm_1 = require("typeorm");
var usuario_1 = require("../models/usuario");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    //CREAR UN NUEVO USUARIO
    UserController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, user, newUser, userSave, error_1;
            return __generator(this, function (_a) {
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
                        userSave = _a.sent();
                        /* //creamos su toke del usuario registrado
                        const token = new Jsonwebtoken(UserDate).createToken(); */
                        return [2 /*return*/, res.status(200).json({ message: "El usuario " + userSave.Names + " ha sido creado" })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //datos de un usuario
    UserController.prototype.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.user;
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne(datos.id)];
                    case 1:
                        user = _a.sent();
                        user.Password = '';
                        return [2 /*return*/, res.json(user)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS USUARIOS
    UserController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).find({
                                select: ["id", "Names", "FirstName", "LastName", "Celular", "Address", "Email", "Role", "CreatedAt", "UpdatedAt"],
                                where: { Estado: 1 }
                            })];
                    case 1:
                        users = _a.sent();
                        if (users.length > 0) {
                            return [2 /*return*/, res.json(users)];
                        }
                        else {
                            return [2 /*return*/, res.status(400).json({ message: 'no hay resultados' })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_3 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //EDITAR USUARIO
    UserController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne(req.body.id)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 3];
                        typeorm_1.getRepository(usuario_1.User).merge(user, req.body);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).save(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: "Los datos del usuario " + user.Names.toUpperCase() + " han sido actualizados" })];
                    case 3: return [2 /*return*/, res.status(404).json({ message: "No existe usuario" })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.json(error_4)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //ELIMINAR UN USUARIO
    UserController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(usuario_1.User)
                                .set({ Estado: 0 })
                                .where("id = :id", { id: req.params.id })
                                .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: "Un usuario ha sido elimninado del sistema." })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
