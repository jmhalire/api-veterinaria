"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacuna = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var Vacuna = /** @class */ (function () {
    function Vacuna() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Vacuna.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        tslib_1.__metadata("design:type", String)
    ], Vacuna.prototype, "Tipo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        tslib_1.__metadata("design:type", String)
    ], Vacuna.prototype, "Observacion", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Vacuna.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Vacuna.prototype, "UpdatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return mascota_1.Mascota; }, function (mascota) { return mascota.vacunas; }, { nullable: false }),
        tslib_1.__metadata("design:type", mascota_1.Mascota)
    ], Vacuna.prototype, "mascota", void 0);
    Vacuna = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Vacuna);
    return Vacuna;
}());
exports.Vacuna = Vacuna;
