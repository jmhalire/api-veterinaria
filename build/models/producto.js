"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var detalleVenta_1 = require("./detalleVenta");
var Producto = /** @class */ (function () {
    function Producto() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Producto.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        tslib_1.__metadata("design:type", String)
    ], Producto.prototype, "Nombre", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Producto.prototype, "Costo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], Producto.prototype, "stock", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], Producto.prototype, "Estado", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return detalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.productos; }),
        tslib_1.__metadata("design:type", Array)
    ], Producto.prototype, "detalleVentas", void 0);
    Producto = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Producto);
    return Producto;
}());
exports.Producto = Producto;
