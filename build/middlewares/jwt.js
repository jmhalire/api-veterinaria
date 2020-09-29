"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jsonwebtoken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var configs_1 = __importDefault(require("../config/configs"));
var Jsonwebtoken = /** @class */ (function () {
    function Jsonwebtoken(user) {
        this.user = user;
    }
    Jsonwebtoken.prototype.createToken = function () {
        return jsonwebtoken_1.default.sign({ id: this.user.id, email: this.user.Email }, configs_1.default.JWTSECRET);
    };
    return Jsonwebtoken;
}());
exports.Jsonwebtoken = Jsonwebtoken;
