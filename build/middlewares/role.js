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
            if (user.Role === 'ADMIN') {
                nex();
            }
            else {
                //status 401 no autorizado o puede ser 403 cliente no posee recursos
                return res.status(401).json({ message: 'No estas autorizado para acceder a esta informacion o para realizar este proceso' });
                //return res.status(401).json('No estas autorizado para acceder a esta informacion o para realizar este proceso');
            }
        }
        catch (error) {
            return res.status(404).json(error);
        }
    };
    return AuthRole;
}());
exports.AuthRole = AuthRole;
