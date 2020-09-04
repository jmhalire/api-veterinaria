"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var database_1 = require("./database");
/**
 * main
 */
function main() {
    //iniciando servidor en el puerto 8080
    var app = new app_1.App(8080);
    app.startServer();
    //iniciando la conexion a la base de datos
    var dataBase = new database_1.DataBaseConnect();
    dataBase.connectDataBase();
}
main();
