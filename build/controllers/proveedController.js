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
exports.ProveedController = void 0;
var typeorm_1 = require("typeorm");
var proveedor_1 = require("../models/proveedor");
//import { User } from "../models/usuario";
var ProveedController = /** @class */ (function () {
    function ProveedController() {
    }
    //CREAR UN NUEVO PROVEEDOR
    ProveedController.prototype.createProveed = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newProveedor, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        newProveedor = typeorm_1.getRepository(proveedor_1.Proveedor).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).save(newProveedor)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: datos.Nombre.toUpperCase() + "...  Nuevo proveedor agregado." })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //OBTENEMOS TODOS LOS proveedore
    ProveedController.prototype.getProveeds = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listProveed, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Proveedor")
                                .orderBy("Proveedor.Nombre")
                                .leftJoinAndSelect("Proveedor.productos", "productos")
                                .leftJoinAndSelect("productos.categoria", "categoria")
                                .getMany()];
                    case 1:
                        listProveed = _a.sent();
                        //const client = await getRepository(Cliente).find({Estado: 1}); 
                        return [2 /*return*/, res.json(listProveed)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProveedController.prototype.getProveed = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var proveedorOne, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Proveedor")
                                .leftJoinAndSelect("Proveedor.productos", "producto")
                                .where("Proveedor.id = :id", { id: req.params.id })
                                .getOne()];
                    case 1:
                        proveedorOne = _a.sent();
                        return [2 /*return*/, res.json(proveedorOne)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ error: error_3 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProveedController.prototype.getProveedProductos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, proveed, proveeds, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).findOne(id)];
                    case 1:
                        proveed = _a.sent();
                        if (!((proveed === null || proveed === void 0 ? void 0 : proveed.Nombre) !== null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Proveedor")
                                .leftJoinAndSelect("Proveedor.productos", "producto")
                                .where("Producto.id = :id", { id: id })
                                .getOne()];
                    case 2:
                        proveeds = _a.sent();
                        return [2 /*return*/, res.json(proveeds)];
                    case 3: return [2 /*return*/, res.status(404).json({ value: false, message: 'No existe proveedor' })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //EDITAR PROVEEDOR
    ProveedController.prototype.updateProveed = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, proveed, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        id = req.body.id;
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).findOne(id)];
                    case 1:
                        proveed = _a.sent();
                        if (!proveed) return [3 /*break*/, 3];
                        typeorm_1.getRepository(proveedor_1.Proveedor).merge(proveed, req.body);
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).save(proveed)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Los datos se actualizaron correctamente' })];
                    case 3: return [2 /*return*/, res.status(404).json({ message: "No existe proveedor" })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.json(error_5)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //ELIMINAR PROVEEDOR
    ProveedController.prototype.deleteProveed = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).delete(req.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ value: true })];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, res.json(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //cantidad de proveedores registrados en el sistema
    ProveedController.prototype.countProveed = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var count, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor)
                                .createQueryBuilder("Proveedor").getCount()];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, res.json({ count: count })];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProveedController;
}());
exports.ProveedController = ProveedController;
