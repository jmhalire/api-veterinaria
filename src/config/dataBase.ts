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
//    "password": "6uxNcuZgyIQdMFDs09Ol",
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


// MYSQL_ADDON_HOST=boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com
// MYSQL_ADDON_DB=boepuu0mouwevp1eeedw
// MYSQL_ADDON_USER=ue8asp5qd2kvvk1b
// MYSQL_ADDON_PORT=3306
// MYSQL_ADDON_PASSWORD=6uxNcuZgyIQdMFDs09Ol 
// MYSQL_ADDON_URI=mysql://ue8asp5qd2kvvk1b:6uxNcuZgyIQdMFDs09Ol@boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com:3306/boepuu0mouwevp1eeedw

//connection URL : mysql://ue8asp5qd2kvvk1b:sjWVuyIZwZY9ItiRMRhA@boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com:3306/boepuu0mouwevp1eeedw