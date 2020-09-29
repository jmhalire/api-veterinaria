"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "type": "mysql",
    "host": process.env.MYSQL_ADDON_HOST,
    "port": process.env.MYSQL_ADDON_PORT,
    "username": process.env.MYSQL_ADDON_USER,
    "password": process.env.MYSQL_ADDON_PASSWORD,
    "database": process.env.MYSQL_ADDON_DB,
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/models/*.js"
    ],
    "migrations": [
        "src/migration/*.js"
    ],
    "subscribers": [
        "src/subscriber/*.js"
    ],
    "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
//connection URL : mysql://ue8asp5qd2kvvk1b:sjWVuyIZwZY9ItiRMRhA@boepuu0mouwevp1eeedw-mysql.services.clever-cloud.com:3306/boepuu0mouwevp1eeedw
