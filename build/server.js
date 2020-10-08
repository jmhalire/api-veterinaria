"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var app_1 = require("./app");
var database_1 = require("./database");
/**
 * main
 */
function main() {
    // let value = {
    //     JWTSECRET: process.env.JWTSECRET,
    //     TOKEN_API_WEATHER: process.env.TOKEN_API_WEATHER
    // }
    // console.log(value);
    //iniciando servidor en el puerto 8080
    var app = new app_1.App();
    app.startServer();
    //iniciando la conexion a la base de datos
    var dataBase = new database_1.DataBaseConnect();
    dataBase.connectDataBase();
}
//llamanos anuestro metoodo principal para arrancar el servidor
main();
