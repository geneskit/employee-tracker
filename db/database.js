const mysql = require('mysql2');

class Database {
    constructor(connection) {
        this.connection = mysql.createConnection(connection);
    }
}