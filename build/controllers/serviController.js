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
exports.ServiController = void 0;
var typeorm_1 = require("typeorm");
//interface
var visita_1 = require("../models/visita");
var vacuna_1 = require("../models/vacuna");
var cita_1 = require("../models/cita");
var ServiController = /** @class */ (function () {
    function ServiController() {
    }
    // = ==================== citas de clientes y pacientes =  ===========================
    //listar todas las citas
    ServiController.prototype.listCitasPendient = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listaCitas, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Cita")
                                .leftJoinAndSelect("Cita.mascota", "mascota")
                                .leftJoinAndSelect("Cita.cliente", "cliente")
                                .where("Cita.Estado = :Estado", { Estado: 0 })
                                .getMany()];
                    case 1:
                        listaCitas = _a.sent();
                        return [2 /*return*/, res.json(listaCitas)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //agrgar o guradar un acita
    ServiController.prototype.addCita = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newCita, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        console.log(datos);
                        newCita = typeorm_1.getRepository(cita_1.Cita).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(cita_1.Cita).save(newCita)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Cita registrada correctamente' })];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //acuatizando las visitas
    ServiController.prototype.updateCitaState = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var idCita, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        idCita = req.params.id;
                        return [4 /*yield*/, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(cita_1.Cita)
                                .set({ Estado: 1 })
                                .where("id = :id", { id: idCita })
                                .execute()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            return res.json({ message: "Se atendio una cita" });
                        }, 500);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.json(error_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // ===================== vicitas de clientes y pacientes   =============================
    ServiController.prototype.listaVisitas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listVisitas, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Visita")
                                .leftJoinAndSelect("Visita.mascota", "mascota")
                                .leftJoinAndSelect("Visita.cliente", "cliente")
                                .getMany()];
                    case 1:
                        listVisitas = _a.sent();
                        return [2 /*return*/, res.json(listVisitas)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //guardar una nueva visita
    ServiController.prototype.addVisita = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newVisita, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        newVisita = typeorm_1.getRepository(visita_1.Visita).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(visita_1.Visita).save(newVisita)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'visita registrada correctamente' })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //acuatizando las visitas
    ServiController.prototype.updateVisita = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var idVisitas;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    idVisitas = req.body;
                    console.log(idVisitas);
                    idVisitas.forEach(function (idVisita) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                //await getRepository(Visita).update(idVisita, {EstaPagado: "SI"});
                                return [4 /*yield*/, typeorm_1.getConnection()
                                        .createQueryBuilder()
                                        .update(visita_1.Visita)
                                        .set({ EstaPagado: "SI" })
                                        .where("id = :id", { id: idVisita })
                                        .execute()];
                                case 1:
                                    //await getRepository(Visita).update(idVisita, {EstaPagado: "SI"});
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    setTimeout(function () {
                        return res.json({ message: "Estado de pagos del cliente actualizado" });
                    }, 1000);
                }
                catch (error) {
                    return [2 /*return*/, res.json(error)];
                }
                return [2 /*return*/];
            });
        });
    };
    //cantidad de visitas
    ServiController.prototype.countVisita = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var count, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(visita_1.Visita)
                                .createQueryBuilder("Visita").getCount()];
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
    //guardar una nueva visita
    ServiController.prototype.addVacuna = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newVacuna, error_7;
            return __generator(this, function (_a) {
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
                        error_7 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ServiController;
}());
exports.ServiController = ServiController;
