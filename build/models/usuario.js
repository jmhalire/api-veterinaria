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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
var typeorm_1 = require("typeorm");
var bcrypt_1 = __importDefault(require("bcrypt"));
var venta_1 = require("./venta");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["GENERAL"] = "GENERAL";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var User = /** @class */ (function () {
    function User() {
    }
    //se ejecuta antes de guardar el usuario
    User.prototype.encryptPasword = function () {
        var salt = bcrypt_1.default.genSaltSync(10);
        this.Password = bcrypt_1.default.hashSync(this.Password, salt);
    };
    //metodo validar
    User.prototype.validPassword = function (password) {
        return bcrypt_1.default.compareSync(password, this.Password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "Names", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "FirstName", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "LastName", void 0);
    __decorate([
        typeorm_1.Column({ type: "numeric", nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "Celular", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        __metadata("design:type", String)
    ], User.prototype, "Address", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 20, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 80, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    __decorate([
        typeorm_1.Column({ type: "enum", enum: UserRole, default: UserRole.GENERAL }),
        __metadata("design:type", String)
    ], User.prototype, "Role", void 0);
    __decorate([
        typeorm_1.Column({ type: "int", default: 1 }),
        __metadata("design:type", Number)
    ], User.prototype, "Estado", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "UpdatedAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return venta_1.Venta; }, function (venta) { return venta.usuario; }),
        __metadata("design:type", Array)
    ], User.prototype, "ventas", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "encryptPasword", null);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
