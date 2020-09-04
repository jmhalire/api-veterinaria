import { App } from "./app";
import { DataBaseConnect } from "./database"

/**
 * main
 */
function main() {
    //iniciando servidor en el puerto 8080
    const app = new App(8080);
    app.startServer();

    //iniciando la conexion a la base de datos
    const dataBase = new DataBaseConnect()
    dataBase.connectDataBase();
} 

main();