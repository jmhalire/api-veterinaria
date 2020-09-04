"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visita = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var cliente_1 = require("./cliente");
var Visita = /** @class */ (function () {
    function Visita() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Visita.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        tslib_1.__metadata("design:type", String)
    ], Visita.prototype, "Motivo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        tslib_1.__metadata("design:type", String)
    ], Visita.prototype, "Sintomas", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        tslib_1.__metadata("design:type", String)
    ], Visita.prototype, "Diagnostico", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        tslib_1.__metadata("design:type", String)
    ], Visita.prototype, "Tratamiento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Visita.prototype, "Costo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 10 }),
        tslib_1.__metadata("design:type", String)
    ], Visita.prototype, "EstaPagado", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], Visita.prototype, "Estado", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Visita.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return mascota_1.Mascota; }, function (mascota) { return mascota.visitas; }, { nullable: false }),
        tslib_1.__metadata("design:type", mascota_1.Mascota)
    ], Visita.prototype, "mascota", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (cliente) { return cliente.visitas; }, { nullable: false }),
        tslib_1.__metadata("design:type", cliente_1.Cliente)
    ], Visita.prototype, "cliente", void 0);
    Visita = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Visita);
    return Visita;
}());
exports.Visita = Visita;
