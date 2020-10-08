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
var cliente_1 = require("./cliente");
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
        typeorm_1.ManyToOne(function (type) { return mascota_1.Mascota; }, function (mascota) { return mascota.visitas; }, { nullable: false }),
        __metadata("design:type", mascota_1.Mascota)
    ], Cita.prototype, "mascota", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (cliente) { return cliente.visitas; }, { nullable: false }),
        __metadata("design:type", cliente_1.Cliente)
    ], Cita.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cita.prototype, "Motivo", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", Date)
    ], Cita.prototype, "Dia", void 0);
    __decorate([
        typeorm_1.Column({ type: "time" }),
        __metadata("design:type", Date)
    ], Cita.prototype, "Hora", void 0);
    __decorate([
        typeorm_1.Column({ type: "int", default: 0 }),
        __metadata("design:type", Number)
    ], Cita.prototype, "Estado", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Cita.prototype, "CreatedAt", void 0);
    Cita = __decorate([
        typeorm_1.Entity()
    ], Cita);
    return Cita;
}());
exports.Cita = Cita;
