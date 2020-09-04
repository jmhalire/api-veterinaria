"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConnect = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dataBase_1 = tslib_1.__importDefault(require("./config/dataBase"));
var DataBaseConnect = /** @class */ (function () {
    function DataBaseConnect() {
        this.orm = dataBase_1.default;
    }
    /**
     * connectDataBase
     */
    DataBaseConnect.prototype.connectDataBase = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, typeorm_1.createConnection(this.orm)];
                    case 1:
                        _a.connection = _b.sent();
                        console.log("DB connection");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DataBaseConnect;
}());
exports.DataBaseConnect = DataBaseConnect;
