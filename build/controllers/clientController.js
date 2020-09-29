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
exports.ClientController = void 0;
var typeorm_1 = require("typeorm");
var cliente_1 = require("../models/cliente");
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    //CREAR UN NUEVO USUARIO
    ClientController.prototype.createClient = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, clienteEmail, clienteCelular, newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        datos = req.body;
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne({ Email: datos.Email })];
                    case 1:
                        clienteEmail = _a.sent();
                        if (!(clienteEmail && datos.Email !== "-")) return [3 /*break*/, 3];
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne({ Celular: datos.Celular })];
                    case 2:
                        clienteCelular = _a.sent();
                        if (clienteCelular) {
                            return [2 /*return*/, res.status(404).json({ value: false, message: "Ya existe un cliente con ese correo y numero telefonico" })];
                        }
                        return [2 /*return*/, res.status(404).json({ value: false, message: "Ya existe un cliente con ese correo" })];
                    case 3:
                        newUser = typeorm_1.getRepository(cliente_1.Cliente).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).save(newUser)
                            /* //creamos su toke del usuario registrado
                            const token = new Jsonwebtoken(UserDate).createToken(); */
                        ];
                    case 4:
                        _a.sent();
                        /* //creamos su toke del usuario registrado
                        const token = new Jsonwebtoken(UserDate).createToken(); */
                        return [2 /*return*/, res.status(200).json({ value: true, message: datos.Nombres.toUpperCase() + "...  Nuevo cliente agregado." })];
                    case 5:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS USUARIOS
    ClientController.prototype.getClients = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listClient, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Cliente")
                                .orderBy("Cliente.Nombres")
                                .leftJoinAndSelect("Cliente.mascotas", "mascotas")
                                .leftJoinAndSelect("Cliente.ventas", "ventas")
                                .leftJoinAndSelect("Cliente.visitas", "visitas")
                                .where("Cliente.Estado = :Estado", { Estado: 1 })
                                .getMany()];
                    case 1:
                        listClient = _a.sent();
                        //const client = await getRepository(Cliente).find({Estado: 1}); 
                        return [2 /*return*/, res.json(listClient)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientController.prototype.getClientMascotas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, client, clients, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne(id)];
                    case 1:
                        client = _a.sent();
                        if (!((client === null || client === void 0 ? void 0 : client.Estado) !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Cliente")
                                .leftJoinAndSelect("Cliente.mascotas", "mascota")
                                .where("Cliente.id = :id", { id: id })
                                .getOne()];
                    case 2:
                        clients = _a.sent();
                        return [2 /*return*/, res.json(clients)];
                    case 3: return [2 /*return*/, res.status(404).json({ value: false, message: 'No existe cliente' })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //cliente y sus visitas
    //EDITAR USUARIO
    ClientController.prototype.updateClient = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, client, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.body.id;
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne(id)];
                    case 1:
                        client = _a.sent();
                        if (!client) return [3 /*break*/, 3];
                        typeorm_1.getRepository(cliente_1.Cliente).merge(client, req.body);
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).save(client)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Los datos se actualizaron correctamente' })];
                    case 3: return [2 /*return*/, res.status(404).json({ message: "No existe cliente" })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.json(error_4)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //ACTUALIZANDO EL ESTADO DEL CLIENTE A ELIMINADO
    ClientController.prototype.deleteClient = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(cliente_1.Cliente)
                                .set({ Estado: 0 })
                                .where("id = :id", { id: req.params.id })
                                .execute()];
                    case 1:
                        _a.sent();
                        //await getRepository(Cliente).delete(req.params.id);
                        return [2 /*return*/, res.json({ message: 'usuario eliminado' })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //cantidad de clientes registrados en el sistema
    ClientController.prototype.countClient = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var count, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente)
                                .createQueryBuilder("Cliente").getCount()];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, res.json({ count: count })];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ClientController;
}());
exports.ClientController = ClientController;
