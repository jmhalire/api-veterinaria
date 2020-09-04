"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
var venta_1 = require("./venta");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["CLIENTE"] = "cliente";
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
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Names", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "FirstName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "LastName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "numeric", nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Celular", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 40 }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Address", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 20, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "varchar", length: 80, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "enum", enum: UserRole, default: UserRole.CLIENTE }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "Role", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "int" }),
        tslib_1.__metadata("design:type", Number)
    ], User.prototype, "Estado", void 0);
    tslib_1.__decorate([
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], User.prototype, "CreatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], User.prototype, "UpdatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return venta_1.Venta; }, function (venta) { return venta.usuario; }),
        tslib_1.__metadata("design:type", Array)
    ], User.prototype, "ventas", void 0);
    tslib_1.__decorate([
        typeorm_1.BeforeInsert(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], User.prototype, "encryptPasword", null);
    User = tslib_1.__decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
