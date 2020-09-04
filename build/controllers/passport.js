"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportClass = void 0;
var tslib_1 = require("tslib");
var passport_jwt_1 = require("passport-jwt");
var passport_1 = tslib_1.__importDefault(require("passport"));
var configs_1 = tslib_1.__importDefault(require("../config/configs"));
var usuario_1 = require("../models/usuario");
var typeorm_1 = require("typeorm");
var PassportClass = /** @class */ (function () {
    function PassportClass() {
        this.options = {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configs_1.default.JWTSECRET
        };
    }
    PassportClass.prototype.strategy = function () {
        var _this = this;
        return new passport_jwt_1.Strategy(this.options, function (payload, done) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var user, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getRepository(usuario_1.User).findOne(payload.id)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, done(null, user)];
                        }
                        return [2 /*return*/, done(null, false)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    PassportClass.prototype.Authenticate = function () {
        return passport_1.default.authenticate('jwt', { session: false });
    };
    return PassportClass;
}());
exports.PassportClass = PassportClass;
