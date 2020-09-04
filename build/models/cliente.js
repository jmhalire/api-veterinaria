"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var venta_1 = require("./venta");
var visita_1 = require("./visita");
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Cliente.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "Nombres", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "Apellidos", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "Email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 9 }),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "Celular", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "Direccion", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Cliente.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Cliente.prototype, "UpdatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], Cliente.prototype, "Estado", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return mascota_1.Mascota; }, function (mascota) { return mascota.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cliente.prototype, "mascotas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return venta_1.Venta; }, function (venta) { return venta.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cliente.prototype, "ventas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return visita_1.Visita; }, function (visita) { return visita.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cliente.prototype, "visitas", void 0);
    Cliente = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
