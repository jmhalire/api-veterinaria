import { join } from "path";
export default {
    "type": "mysql",
    "host": process.env.MYSQL_ADDON_HOST,
    "port": process.env.MYSQL_ADDON_PORT,
    "username": process.env.MYSQL_ADDON_USER,
    "password": process.env.MYSQL_ADDON_PASSWORD,
    "database": process.env.MYSQL_ADDON_DB,
    "synchronize": true,
    "logging": false,
    "entities": [join(__dirname, '../models/*{.ts,.js}')],
    "migrations": ["src/migration/*.ts"],
    "subscribers": ["src/subscriber/*.ts"],
    "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};

// export default {
//     "type": "mysql",
//     "host": "localhost",
//     "port": 3306,
//     "username": "root",
//     "password": "jmhalire",
//     "database": "dbveterinaria",
//     "synchronize": true,
//     "logging": false,
//     "entities": ["src/models/*.ts"],
//     "migrations": ["src/migration/*.ts"],
//     "subscribers": ["src/subscriber/*.ts"],
//     "cli": {
//         "entitiesDir": "src/models",
//         "migrationsDir": "src/migration",
//         "subscribersDir": "src/subscriber"
//     }
// }