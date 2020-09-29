"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleVenta = void 0;
var typeorm_1 = require("typeorm");
var venta_1 = require("./venta");
var producto_1 = require("./producto");
var DetalleVenta = /** @class */ (function () {
    function DetalleVenta() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], DetalleVenta.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], DetalleVenta.prototype, "Punitario", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], DetalleVenta.prototype, "Cantidad", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], DetalleVenta.prototype, "Total", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return venta_1.Venta; }, function (venta) { return venta.detalleVentas; }, { nullable: false }),
        __metadata("design:type", venta_1.Venta)
    ], DetalleVenta.prototype, "venta", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return producto_1.Producto; }, function (producto) { return producto.detalleVentas; }, { nullable: false }),
        __metadata("design:type", producto_1.Producto)
    ], DetalleVenta.prototype, "producto", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], DetalleVenta.prototype, "CreatedAt", void 0);
    DetalleVenta = __decorate([
        typeorm_1.Entity()
    ], DetalleVenta);
    return DetalleVenta;
}());
exports.DetalleVenta = DetalleVenta;
