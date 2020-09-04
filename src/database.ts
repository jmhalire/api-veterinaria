import "reflect-metadata";
import { createConnection } from "typeorm";
import dataConfig from './config/dataBase'

export class DataBaseConnect {

   orm: any
   connection: any;
   constructor() { 
      this.orm = dataConfig;
   }

   /**
    * connectDataBase
    */
   public async connectDataBase() {
      try {
         this.connection = await createConnection(this.orm);
         console.log("DB connection");
      } catch (error) {
         console.log(error);
      }
   }
}