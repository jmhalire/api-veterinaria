"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleVenta = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var venta_1 = require("./venta");
var producto_1 = require("./producto");
var DetalleVenta = /** @class */ (function () {
    function DetalleVenta() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleVenta.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], DetalleVenta.prototype, "PercioUnitario", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], DetalleVenta.prototype, "Cantidad", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return venta_1.Venta; }, function (venta) { return venta.detalleVentas; }, { nullable: false }),
        tslib_1.__metadata("design:type", venta_1.Venta)
    ], DetalleVenta.prototype, "ventas", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return producto_1.Producto; }, function (producto) { return producto.detalleVentas; }, { nullable: false }),
        tslib_1.__metadata("design:type", producto_1.Producto)
    ], DetalleVenta.prototype, "productos", void 0);
    DetalleVenta = tslib_1.__decorate([
        typeorm_1.Entity()
    ], DetalleVenta);
    return DetalleVenta;
}());
exports.DetalleVenta = DetalleVenta;
