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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteController = void 0;
var request_1 = __importDefault(require("request"));
var typeorm_1 = require("typeorm");
//type
var detalleVenta_1 = require("../models/detalleVenta");
//controllers
var calculos_1 = require("./calculos");
var calc = new calculos_1.Functions();
var ReporteController = /** @class */ (function () {
    function ReporteController() {
    }
    //obtenemos los cinco productos mas vendidos
    ReporteController.prototype.getProductFavory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var productSuma, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(detalleVenta_1.DetalleVenta)
                                .createQueryBuilder("DetalleVenta")
                                .limit(10)
                                .orderBy("ProductCantidad", "DESC")
                                .select("DetalleVenta.id")
                                .leftJoinAndSelect("DetalleVenta.producto", "producto")
                                .addSelect("SUM(DetalleVenta.Cantidad)", "ProductCantidad")
                                .groupBy("DetalleVenta.producto")
                                .getRawMany()];
                    case 1:
                        productSuma = _a.sent();
                        return [2 /*return*/, res.json(productSuma)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //reporte de ingresos por meses
    ReporteController.prototype.getIngresoXmeses = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ventas, datosFecha, labels, datos, backgroundColor, borderColor, error_2;
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
                        datosFecha = calc.datosFecha([]);
                        labels = calc.getlabels(datosFecha);
                        datos = calc.calculoDatos(datosFecha, ventas);
                        backgroundColor = calc.backgroundColor();
                        borderColor = calc.borderColor();
                        return [2 /*return*/, res.json({ datos: datos, labels: labels, backgroundColor: backgroundColor, borderColor: borderColor })];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //reporte de ingresos del dia de hoy
    ReporteController.prototype.getIngresoHoy = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ventas, ventasHoy, listVisitas, visitasHoy, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Venta")
                                .leftJoinAndSelect("Venta.cliente", "cliente")
                                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                                .getMany()];
                    case 1:
                        ventas = _a.sent();
                        ventasHoy = calc.ventasDeHoy(ventas);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Visita")
                                .leftJoinAndSelect("Visita.mascota", "mascota")
                                .leftJoinAndSelect("Visita.cliente", "cliente")
                                .getMany()];
                    case 2:
                        listVisitas = _a.sent();
                        visitasHoy = calc.visitasDeHoy(listVisitas);
                        return [2 /*return*/, res.json({ ventasHoy: ventasHoy, visitasHoy: visitasHoy })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //reporte de ingresos por meses
    ReporteController.prototype.getvisitasXmeses = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listVisitas, datosFecha, labels, datos, backgroundColor, borderColor, error_4;
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
                        datosFecha = calc.datosFecha([]);
                        labels = calc.getlabels(datosFecha);
                        datos = calc.calculoClientesXmeses(datosFecha, listVisitas);
                        backgroundColor = calc.backgroundColor();
                        borderColor = calc.borderColor();
                        return [2 /*return*/, res.json({ datos: datos, labels: labels, backgroundColor: backgroundColor, borderColor: borderColor })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //GET CLIMA
    ReporteController.prototype.getWether = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var TOKEN_API_WEATHER, url;
            return __generator(this, function (_a) {
                TOKEN_API_WEATHER = process.env.TOKEN_API_WEATHER;
                url = "http://api.openweathermap.org/data/2.5/weather?appid=" + TOKEN_API_WEATHER + "&units=metric&q=cusco";
                try {
                    ///request.get()
                    request_1.default({
                        url: url,
                        json: true
                    }, function (error, response, body) {
                        if (!error && response.statusCode === 200) {
                            // Pintamos la respuesta JSON en navegador.
                            res.send(body);
                        }
                        else {
                            res.send([]);
                        }
                    });
                }
                catch (error) {
                    return [2 /*return*/, res.status(404).json(error)];
                }
                return [2 /*return*/];
            });
        });
    };
    return ReporteController;
}());
exports.ReporteController = ReporteController;
