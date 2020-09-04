"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
var passport_1 = __importDefault(require("passport"));
var index_1 = require("./routes/index");
var auth_1 = require("./routes/auth");
var user_1 = require("./routes/user");
var client_1 = require("./routes/client");
var mascot_1 = require("./routes/mascot");
var service_1 = require("./routes/service");
var passport_2 = require("./controllers/passport");
//creamos los objetos de las clases de routes
var indexRouter = new index_1.IndexRouter();
var userRouter = new user_1.UserRouter();
var authRouter = new auth_1.AuthRouter();
var clientRouter = new client_1.ClientRouter();
var mascotRouter = new mascot_1.MascotRouter();
var serviceRouter = new service_1.ServiceRouter();
var passportClass = new passport_2.PassportClass();
var App = /** @class */ (function () {
    function App(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.Routes();
    }
    /**
     * settings
     */
    App.prototype.settings = function () {
        this.app.set('port', this.port || process.env.PORT);
    };
    /**
     * middlewares
     */
    App.prototype.middlewares = function () {
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(passport_1.default.initialize());
        passport_1.default.use(passportClass.strategy());
    };
    /**
     * Routes
     */
    App.prototype.Routes = function () {
        this.app.use(indexRouter.getRouter());
        this.app.use(authRouter.getRouter());
        this.app.use(userRouter.getRouter());
        this.app.use(clientRouter.getRouter());
        this.app.use(mascotRouter.getRouter());
        this.app.use(serviceRouter.getRouter());
    };
    /**
     * startServer
     */
    App.prototype.startServer = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server on port: " + _this.app.get('port'));
        });
    };
    return App;
}());
exports.App = App;
