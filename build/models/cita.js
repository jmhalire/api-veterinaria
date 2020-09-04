"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var venta_1 = require("./venta");
var visita_1 = require("./visita");
var Cita = /** @class */ (function () {
    function Cita() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Cita.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cita.prototype, "Tipo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cita.prototype, "Apellidos", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        tslib_1.__metadata("design:type", String)
    ], Cita.prototype, "Email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 9 }),
        tslib_1.__metadata("design:type", String)
    ], Cita.prototype, "Celular", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Cita.prototype, "Direccion", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Cita.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Cita.prototype, "UpdatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], Cita.prototype, "Estado", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return mascota_1.Mascota; }, function (mascota) { return mascota.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cita.prototype, "mascotas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return venta_1.Venta; }, function (venta) { return venta.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cita.prototype, "ventas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return visita_1.Visita; }, function (visita) { return visita.cliente; }),
        tslib_1.__metadata("design:type", Array)
    ], Cita.prototype, "visitas", void 0);
    Cita = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Cita);
    return Cita;
}());
exports.Cita = Cita;
