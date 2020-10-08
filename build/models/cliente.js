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
exports.Cliente = void 0;
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var venta_1 = require("./venta");
var visita_1 = require("./visita");
var cita_1 = require("./cita");
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Cliente.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cliente.prototype, "Nombres", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cliente.prototype, "Apellidos", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Cliente.prototype, "Email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 9 }),
        __metadata("design:type", String)
    ], Cliente.prototype, "Celular", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], Cliente.prototype, "Direccion", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Cliente.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Cliente.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Cliente.prototype, "Estado", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return mascota_1.Mascota; }, function (mascota) { return mascota.cliente; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "mascotas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return venta_1.Venta; }, function (venta) { return venta.cliente; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "ventas", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return visita_1.Visita; }, function (visita) { return visita.cliente; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "visitas", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return cita_1.Cita; }, function (cita) { return cita.mascota; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "citas", void 0);
    Cliente = __decorate([
        typeorm_1.Entity()
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
