"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacotaController = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("../models/mascota");
var MacotaController = /** @class */ (function () {
    function MacotaController() {
    }
    //CREAR UN NUEVO USUARIO
    MacotaController.prototype.createMascota = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datos, mascotaNombre, mascotaDuenio, newMascota, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        datos = req.body;
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).findOne({ Nombres: datos.Nombres })];
                    case 1:
                        mascotaNombre = _a.sent();
                        if (!mascotaNombre) return [3 /*break*/, 3];
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).findOne({ cliente: datos.cliente })];
                    case 2:
                        mascotaDuenio = _a.sent();
                        if (mascotaDuenio) {
                            return [2 /*return*/, res.status(400).json({ value: false, message: "Ya existe una mascota de nombre " + datos.Nombres })];
                        }
                        _a.label = 3;
                    case 3:
                        newMascota = typeorm_1.getRepository(mascota_1.Mascota).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).save(newMascota)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, res.json({ value: true, message: datos.Nombres.toUpperCase() + "...  Nueva mascota agregada." })];
                    case 5:
                        error_1 = _a.sent();
                        res.status(400).json(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS USUARIOS
    MacotaController.prototype.getMascotas = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).find()];
                    case 1:
                        client = _a.sent();
                        return [2 /*return*/, res.json(client)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MacotaController.prototype.getMascota = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mascotaOne, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Mascota")
                                .leftJoinAndSelect("Mascota.cliente", "cliente")
                                .leftJoinAndSelect("Mascota.vacunas", "vacunas")
                                .leftJoinAndSelect("Mascota.reservas", "reservas")
                                .leftJoinAndSelect("Mascota.visitas", "visitas")
                                .where("Mascota.id = :id", { id: req.params.id })
                                .getOne()];
                    case 1:
                        mascotaOne = _a.sent();
                        return [2 /*return*/, res.json(mascotaOne)];
                    case 2:
                        error_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //EDITAR USUARIO
    MacotaController.prototype.updateMascota = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, mascot, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).findOne(id)];
                    case 1:
                        mascot = _a.sent();
                        if (!mascot) return [3 /*break*/, 3];
                        typeorm_1.getRepository(mascota_1.Mascota).merge(mascot, req.body);
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).save(mascot)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'los datos se actualizaron correctamente' })];
                    case 3: return [2 /*return*/, res.status(404).json({ message: "No existe la mascota" })];
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
    MacotaController.prototype.deleteMascota = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota).delete(req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ value: true })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return MacotaController;
}());
exports.MacotaController = MacotaController;
