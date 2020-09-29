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
exports.VentaController = void 0;
var typeorm_1 = require("typeorm");
var venta_1 = require("../models/venta");
var producto_1 = require("../models/producto");
var VentaController = /** @class */ (function () {
    function VentaController() {
    }
    //guardar una nueva venta
    VentaController.prototype.saveVenta = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, user, detalleVentas, newFac, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        user = void 0;
                        user = req.user;
                        datos.usuario = user;
                        detalleVentas = datos.detalleVentas;
                        detalleVentas.forEach(function (detalle) { return __awaiter(_this, void 0, void 0, function () {
                            var Produc;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, typeorm_1.getRepository(producto_1.Producto).findOne({
                                            select: ['Stock'],
                                            where: { id: detalle.producto }
                                        })];
                                    case 1:
                                        Produc = _a.sent();
                                        return [4 /*yield*/, typeorm_1.getRepository(producto_1.Producto).update(detalle.producto, { Stock: Produc.Stock - detalle.Cantidad })];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        newFac = typeorm_1.getRepository(venta_1.Venta).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(venta_1.Venta).save(newFac)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Ventan registrada correctamente." })];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //LISTA DE VENTAS 
    VentaController.prototype.getVentas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ventas, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Venta")
                                .leftJoinAndSelect("Venta.cliente", "cliente")
                                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                                .getMany()];
                    case 1:
                        ventas = _a.sent();
                        return [2 /*return*/, res.json(ventas)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // obtener una sola venta 
    VentaController.prototype.getVenta = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var venta, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Venta")
                                .leftJoinAndSelect("Venta.cliente", "cliente")
                                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                                .where("Venta.id = :id", { id: req.params.id })
                                .getOne()];
                    case 1:
                        venta = _a.sent();
                        return [2 /*return*/, res.json(venta)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return VentaController;
}());
exports.VentaController = VentaController;
