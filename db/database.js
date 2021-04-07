const mysql = require("mysql");

class Databse {
    constructor(connection) {
        this.connection = mysql.createConnection(connection);
    }
}