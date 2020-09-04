"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiController = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
//interface
var visita_1 = require("../models/visita");
var vacuna_1 = require("../models/vacuna");
var ServiController = /** @class */ (function () {
    function ServiController() {
    }
    //
    ServiController.prototype.listaVisitas = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var listVisitas, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Visita")
                                .leftJoinAndSelect("Visita.mascota", "mascota")
                                .leftJoinAndSelect("Visita.cliente", "cliente")
                                .where("Visita.Estado = :Estado", { Estado: 1 })
                                .getMany()];
                    case 1:
                        listVisitas = _a.sent();
                        return [2 /*return*/, res.json(listVisitas)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //guardar una nueva visita
    ServiController.prototype.addVisita = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datos, newVisita, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        console.log(datos);
                        newVisita = typeorm_1.getRepository(visita_1.Visita).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(visita_1.Visita).save(newVisita)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'visita registrada correctamente' })];
                    case 2:
                        error_2 = _a.sent();
                        res.status(400).json(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //guardar una nueva visita
    ServiController.prototype.addVacuna = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datos, newVacuna, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        console.log(datos);
                        newVacuna = typeorm_1.getRepository(vacuna_1.Vacuna).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(vacuna_1.Vacuna).save(newVacuna)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'visita registrada correctamente' })];
                    case 2:
                        error_3 = _a.sent();
                        res.status(400).json(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ServiController;
}());
exports.ServiController = ServiController;
