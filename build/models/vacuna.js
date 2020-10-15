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
exports.Vacuna = void 0;
var typeorm_1 = require("typeorm");
var mascota_1 = require("./mascota");
var Vacuna = /** @class */ (function () {
    function Vacuna() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Vacuna.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20 }),
        __metadata("design:type", String)
    ], Vacuna.prototype, "Tipo", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 80 }),
        __metadata("design:type", String)
    ], Vacuna.prototype, "Observacion", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Vacuna.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Vacuna.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return mascota_1.Mascota; }, function (mascota) { return mascota.vacunas; }, { nullable: false }),
        __metadata("design:type", mascota_1.Mascota)
    ], Vacuna.prototype, "mascota", void 0);
    Vacuna = __decorate([
        typeorm_1.Entity()
    ], Vacuna);
    return Vacuna;
}());
exports.Vacuna = Vacuna;
