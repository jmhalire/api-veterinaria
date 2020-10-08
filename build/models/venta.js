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
exports.Venta = void 0;
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var usuario_1 = require("./usuario");
var detalleVenta_1 = require("./detalleVenta");
var Venta = /** @class */ (function () {
    function Venta() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Venta.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (client) { return client.ventas; }, { nullable: false }),
        __metadata("design:type", cliente_1.Cliente)
    ], Venta.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return usuario_1.User; }, function (user) { return user.ventas; }, { nullable: false }),
        __metadata("design:type", usuario_1.User)
    ], Venta.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return detalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.venta; }, { nullable: false, cascade: true }),
        __metadata("design:type", Array)
    ], Venta.prototype, "detalleVentas", void 0);
    __decorate([
        typeorm_1.Column({ type: "float" }),
        __metadata("design:type", Number)
    ], Venta.prototype, "Total", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Venta.prototype, "CreatedAt", void 0);
    Venta = __decorate([
        typeorm_1.Entity()
    ], Venta);
    return Venta;
}());
exports.Venta = Venta;
