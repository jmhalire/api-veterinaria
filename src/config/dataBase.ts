export default {
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "jmhalire",
   "database": "dbveterinaria",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

// export default {
//    "type": "mysql",
//    "host": "boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com",
//    "port": 3306,
//    "username": "ue8asp5qd2kvvk1b",
//    "password": "sjWVuyIZwZY9ItiRMRhA",
//    "database": "boepuu0mouwevp1eeedw",
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

//connection URL : mysql://ue8asp5qd2kvvk1b:sjWVuyIZwZY9ItiRMRhA@boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com:3306/boepuu0mouwevp1eeedw