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
exports.MacotaController = void 0;
var typeorm_1 = require("typeorm");
var mascota_1 = require("../models/mascota");
var MacotaController = /** @class */ (function () {
    function MacotaController() {
    }
    //CREAR UN NUEVO USUARIO
    MacotaController.prototype.createMascota = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, mascotaNombre, mascotaDuenio, newMascota, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        datos = req.body;
                        console.log(datos);
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
                        return [2 /*return*/, res.json({ message: datos.Nombres.toUpperCase() + "...  Nueva mascota agregada." })];
                    case 5:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_1)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS USUARIOS
    MacotaController.prototype.getMascotas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client, error_2;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var mascotaOne, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Mascota")
                                .leftJoinAndSelect("Mascota.cliente", "cliente")
                                .leftJoinAndSelect("Mascota.vacunas", "vacunas")
                                .leftJoinAndSelect("Mascota.citas", "citas")
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
        return __awaiter(this, void 0, void 0, function () {
            var id, mascot, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.body.id;
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
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
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
    //cantidad total de mascotas en el sistema
    MacotaController.prototype.countMascota = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var count, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(mascota_1.Mascota)
                                .createQueryBuilder("Mascota").getCount()];
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
    return MacotaController;
}());
exports.MacotaController = MacotaController;
