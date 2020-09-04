"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var usuario_1 = require("./usuario");
var detalleVenta_1 = require("./detalleVenta");
var Venta = /** @class */ (function () {
    function Venta() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Venta.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (client) { return client.ventas; }, { nullable: false }),
        tslib_1.__metadata("design:type", cliente_1.Cliente)
    ], Venta.prototype, "cliente", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return usuario_1.User; }, function (user) { return user.ventas; }, { nullable: false }),
        tslib_1.__metadata("design:type", usuario_1.User)
    ], Venta.prototype, "usuario", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return detalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.ventas; }, { nullable: false }),
        tslib_1.__metadata("design:type", Array)
    ], Venta.prototype, "detalleVentas", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Venta.prototype, "CreatedAt", void 0);
    Venta = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Venta);
    return Venta;
}());
exports.Venta = Venta;
