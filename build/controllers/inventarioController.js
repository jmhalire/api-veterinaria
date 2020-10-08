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
exports.InventarioController = void 0;
var typeorm_1 = require("typeorm");
var producto_1 = require("../models/producto");
var proveedor_1 = require("../models/proveedor");
var categoria_1 = require("../models/categoria");
var InventarioController = /** @class */ (function () {
    function InventarioController() {
    }
    // ================ ARTICULOS   ========================
    InventarioController.prototype.saveArticulo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var articulo, newArticulo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        articulo = req.body;
                        newArticulo = typeorm_1.getRepository(producto_1.Producto).create(articulo);
                        return [4 /*yield*/, typeorm_1.getRepository(producto_1.Producto).save(newArticulo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Nuevo producto guardado' })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventarioController.prototype.getArticulos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var articulos, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Producto")
                                .orderBy("Producto.Nombre")
                                .leftJoinAndSelect("Producto.proveedor", "proveedor")
                                .leftJoinAndSelect("Producto.categoria", "categoria")
                                .getMany()];
                    case 1:
                        articulos = _a.sent();
                        return [2 /*return*/, res.json(articulos)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //ontener detaller de un solo producto
    InventarioController.prototype.getProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var articulos, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Producto")
                                .leftJoinAndSelect("Producto.proveedor", "proveedor")
                                .leftJoinAndSelect("Producto.categoria", "categoria")
                                .where("Producto.id = :id", { id: req.params.id })
                                .getOne()];
                    case 1:
                        articulos = _a.sent();
                        return [2 /*return*/, res.json(articulos)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //actualizar el stock de un producto
    InventarioController.prototype.updatedStock = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var dato, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dato = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(producto_1.Producto)
                                .set({ Stock: dato.stock })
                                .where("id = :id", { id: dato.id })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Stock del producto actualizado' })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_4)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // =============    proveeedores   ================
    InventarioController.prototype.saveProveedor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newProvee, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        newProvee = typeorm_1.getRepository(proveedor_1.Proveedor).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(proveedor_1.Proveedor).save(newProvee)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Nuevo proveedor guardado' })];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventarioController.prototype.getProveedores = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var provedores, error_6;
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
                        provedores = _a.sent();
                        return [2 /*return*/, res.json(provedores)];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // =============    categorias   ================
    InventarioController.prototype.saveCategoria = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var datos, newCate, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        datos = req.body;
                        newCate = typeorm_1.getRepository(categoria_1.Categoria).create(datos);
                        return [4 /*yield*/, typeorm_1.getRepository(categoria_1.Categoria).save(newCate)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'Nueva categoria guardada' })];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventarioController.prototype.getCategorProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categoria, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder("Categoria")
                                .orderBy('Categoria.Nombre')
                                .leftJoinAndSelect("Categoria.productos", "productos")
                                .leftJoinAndSelect("productos.proveedor", "proveedor")
                                .getMany()];
                    case 1:
                        categoria = _a.sent();
                        return [2 /*return*/, res.json(categoria)];
                    case 2:
                        error_8 = _a.sent();
                        return [2 /*return*/, res.status(404).json(error_8)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return InventarioController;
}());
exports.InventarioController = InventarioController;
