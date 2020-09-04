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
exports.Cita = void 0;
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var venta_1 = require("./venta");
var visita_1 = require("./visita");
var Cita = /** @class */ (function () {
    function Cita() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Cita.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Tipo", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Apellidos", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 9 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Celular", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Direccion", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Cita.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Cita.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Cita.prototype, "Estado", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return mascota_1.Mascota; }, function (mascota) { return mascota.cliente; }),
        __metadata("design:type", Array)
    ], Cita.prototype, "mascotas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return venta_1.Venta; }, function (venta) { return venta.cliente; }),
        __metadata("design:type", Array)
    ], Cita.prototype, "ventas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return visita_1.Visita; }, function (visita) { return visita.cliente; }),
        __metadata("design:type", Array)
    ], Cita.prototype, "visitas", void 0);
    Cita = __decorate([
        typeorm_1.Entity()
    ], Cita);
    return Cita;
}());
exports.Cita = Cita;
