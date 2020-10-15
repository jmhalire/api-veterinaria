import { join } from "path";
/* export default {
    "type": "mysql",
    "url": process.env.MYSQL_ADDON_URI,
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
}; */

export default {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "jmhalire@MYSQL12",
    "database": "dbveterinaria",
    "synchronize": true,
    "logging": false,
    "entities": [ join(__dirname, '../models/*{.ts,.js}') ],
    "migrations": ["src/migration/*.ts"],
    "subscribers": ["src/subscriber/*.ts"],
    "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}
