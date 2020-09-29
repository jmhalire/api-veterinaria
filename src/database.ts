import { config } from "dotenv/types";
import "reflect-metadata";
import { createConnection } from "typeorm";
import connecDB from "./configs/config";

export class DataBaseConnect {

   orm: any
   constructor() { 
      this.orm = connecDB
   }

   /**
    * connectDataBase
    */
   public async connectDataBase(): Promise<void> {
      try {
         let connection = await createConnection(this.orm);
         console.log("DB connection");
      } catch (error) {
         console.log(error);
      }
   }
}

// export default {
//    "type": "mysql",
//    "host": "localhost",
//    "port": 3306,
//    "username": "root",
//    "password": "jmhalire",
//    "database": "dbveterinaria",
//    "synchronize": true,
//    "logging": false,
//    "entities": [
//       "src/models/**/*.ts"
//    ],
//    "migrations": [
//       "src/migration/**/*.ts"
//    ],
//    "subscribers": [
//       "src/subscriber/**/*.ts"
//    ],
//    "cli": {
//       "entitiesDir": "src/models",
//       "migrationsDir": "src/migration",
//       "subscribersDir": "src/subscriber"
//    }
// }