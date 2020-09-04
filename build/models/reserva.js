"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var Reserva = /** @class */ (function () {
    function Reserva() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Reserva.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Reserva.prototype, "Descripcion", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return mascota_1.Mascota; }, function (mascota) { return mascota.reservas; }, { nullable: false }),
        tslib_1.__metadata("design:type", mascota_1.Mascota)
    ], Reserva.prototype, "mascota", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Reserva.prototype, "CreatedAt", void 0);
    Reserva = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Reserva);
    return Reserva;
}());
exports.Reserva = Reserva;
