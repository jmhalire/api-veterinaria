require('dotenv').config()
import { App } from "./app";
import { DataBaseConnect } from "./database"


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
    const app = new App();
    app.startServer();

    //iniciando la conexion a la base de datos
    const dataBase = new DataBaseConnect()
    dataBase.connectDataBase();
} 

//llamanos anuestro metoodo principal para arrancar el servidor
main();