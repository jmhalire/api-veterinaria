"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var cliente_1 = require("../models/cliente");
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    //CREAR UN NUEVO USUARIO
    ClientController.prototype.createClient = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datos, clienteEmail, clienteCelular, newUser, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        datos = req.body;
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne({ Email: datos.Email })];
                    case 1:
                        clienteEmail = _a.sent();
                        if (!clienteEmail) return [3 /*break*/, 3];
                        return [4 /*yield*/, typeorm_1.getRepository(cliente_1.Cliente).findOne({ Celular: datos.Celular })];
                    case 2:
                        clienteCelular = _a.sent();
                        if (clienteCelular) {
                            return [2 /*return*/, res.status(404).json({ value: false, message: "Ya existe un cliente con ese correo y numero telefonico" })];
                        }
                        _a.label = 3;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var listClient, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Cliente")
                                .leftJoinAndSelect("Cliente.mascotas", "mascotas")
                                .leftJoinAndSelect("Cliente.ventas", "ventas")
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
    ClientController.prototype.getClient = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, client, clientOne, error_3;
            return tslib_1.__generator(this, function (_a) {
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
                                .leftJoinAndSelect("Cliente.ventas", "venta")
                                .where("Cliente.id = :id", { id: id })
                                .getOne()];
                    case 2:
                        clientOne = _a.sent();
                        return [2 /*return*/, res.json(clientOne)];
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
    //EDITAR USUARIO
    ClientController.prototype.updateClient = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, client, error_4;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
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
                        return [2 /*return*/, res.json({ value: true })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ClientController;
}());
exports.ClientController = ClientController;
