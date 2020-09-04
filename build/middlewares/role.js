"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRole = void 0;
var AuthRole = /** @class */ (function () {
    function AuthRole(role) {
        this.role = role;
    }
    AuthRole.prototype.verificate = function (req, res, nex) {
        var user = req.user;
        try {
            if (user.Role === 'admin') {
                nex();
            }
            else {
                return res.status(404).json({ message: 'No estas autizado para acceder a esta informacion' });
            }
        }
        catch (error) {
            return res.status(404).json(error);
        }
    };
    return AuthRole;
}());
exports.AuthRole = AuthRole;
