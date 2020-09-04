"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jsonwebtoken = void 0;
var tslib_1 = require("tslib");
var jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
var configs_1 = tslib_1.__importDefault(require("../config/configs"));
var Jsonwebtoken = /** @class */ (function () {
    function Jsonwebtoken(user) {
        this.user = user;
    }
    Jsonwebtoken.prototype.createToken = function () {
        return jsonwebtoken_1.default.sign({ id: this.user.id, email: this.user.Email }, configs_1.default.JWTSECRET, { expiresIn: '4h' });
    };
    return Jsonwebtoken;
}());
exports.Jsonwebtoken = Jsonwebtoken;
