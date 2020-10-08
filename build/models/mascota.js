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
exports.Mascota = void 0;
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var vacuna_1 = require("./vacuna");
var visita_1 = require("./visita");
var cita_1 = require("./cita");
var Mascota = /** @class */ (function () {
    function Mascota() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Mascota.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Mascota.prototype, "Nombres", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 30 }),
        __metadata("design:type", String)
    ], Mascota.prototype, "Especie", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 10 }),
        __metadata("design:type", String)
    ], Mascota.prototype, "Sexo", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Mascota.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Mascota.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (client) { return client.mascotas; }, { nullable: false }),
        __metadata("design:type", cliente_1.Cliente
        //una mascota esta relacionado con muchas vacunas OneToMany
        )
    ], Mascota.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return vacuna_1.Vacuna; }, function (vacuna) { return vacuna.mascota; }),
        __metadata("design:type", Array)
    ], Mascota.prototype, "vacunas", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return visita_1.Visita; }, function (visita) { return visita.mascota; }),
        __metadata("design:type", Array)
    ], Mascota.prototype, "visitas", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return cita_1.Cita; }, function (cita) { return cita.mascota; }),
        __metadata("design:type", Array)
    ], Mascota.prototype, "citas", void 0);
    Mascota = __decorate([
        typeorm_1.Entity()
    ], Mascota);
    return Mascota;
}());
exports.Mascota = Mascota;
