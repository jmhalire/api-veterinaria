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
exports.Producto = void 0;
var typeorm_1 = require("typeorm");
var proveedor_1 = require("./proveedor");
var categoria_1 = require("./categoria");
var detalleVenta_1 = require("./detalleVenta");
var Producto = /** @class */ (function () {
    function Producto() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Producto.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Producto.prototype, "Nombre", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Producto.prototype, "Pcompra", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Producto.prototype, "Particulo", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Producto.prototype, "Stock", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Producto.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Producto.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return proveedor_1.Proveedor; }, function (proveedor) { return proveedor.productos; }, { nullable: false }),
        __metadata("design:type", proveedor_1.Proveedor)
    ], Producto.prototype, "proveedor", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return detalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.producto; }, { nullable: false, cascade: ['insert'] }),
        __metadata("design:type", Array)
    ], Producto.prototype, "detalleVentas", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return categoria_1.Categoria; }, function (categoria) { return categoria.productos; }, { nullable: false }),
        __metadata("design:type", categoria_1.Categoria)
    ], Producto.prototype, "categoria", void 0);
    Producto = __decorate([
        typeorm_1.Entity()
    ], Producto);
    return Producto;
}());
exports.Producto = Producto;
