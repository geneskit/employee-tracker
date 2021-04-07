const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require("inquirer");
let Database = require('./db/database.js');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password!',
    database: "employee_trackerDB"
})

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});

async function getEmployees() {
    let query = "SELECT * FROM employee";
    const rows = await connection.query(query);

    let eArray = [];
    for (const e of rows) {
        eArray.push(e.first_name + "" + e.last_name);
    }
    return eArray;
}