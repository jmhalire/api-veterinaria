"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var vacuna_1 = require("./vacuna");
var reserva_1 = require("./reserva");
var visita_1 = require("./visita");
var Mascota = /** @class */ (function () {
    function Mascota() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Mascota.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], Mascota.prototype, "Nombres", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 30 }),
        tslib_1.__metadata("design:type", String)
    ], Mascota.prototype, "Especie", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 10 }),
        tslib_1.__metadata("design:type", String)
    ], Mascota.prototype, "Sexo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Mascota.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Mascota.prototype, "UpdatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (client) { return client.mascotas; }, { nullable: false }),
        tslib_1.__metadata("design:type", cliente_1.Cliente
        //una mascota esta relacionado con muchas vacunas OneToMany
        )
    ], Mascota.prototype, "cliente", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return vacuna_1.Vacuna; }, function (vacuna) { return vacuna.mascota; }),
        tslib_1.__metadata("design:type", Array)
    ], Mascota.prototype, "vacunas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return reserva_1.Reserva; }, function (reserva) { return reserva.mascota; }),
        tslib_1.__metadata("design:type", Array)
    ], Mascota.prototype, "reservas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return visita_1.Visita; }, function (visita) { return visita.mascota; }),
        tslib_1.__metadata("design:type", Array)
    ], Mascota.prototype, "visitas", void 0);
    Mascota = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Mascota);
    return Mascota;
}());
exports.Mascota = Mascota;
