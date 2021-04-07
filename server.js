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

const promptUser = () => {
    inquirer.prompt([
        {
            name: 'initialPrompts',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees,',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ])
    .then((a)) => {
        const {choices} = a;
        if (choices === 'View All Departments') {
            viewAllDepartments();
        }
        if (choices === 'View All Roles') {
            viewAllRoles();
        }
        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
        if (choices === 'Add A Departments') {
            addDepartment();
        }
        if (choices === 'Add A Role') {
            addRole();
        }
        if (choices === 'Add An Employee') {
            addEmployee();
        }
        if (choices === 'Update Employee Role') {
            updateEmployee();
        }
        if (choices === 'Exit') {
            connection.end;
        }
    }
}

// VIEW FUNCTIONS
async function getDepartments() {
    let q = "SELECT * FROM eDepartment";
    const r = await connection.query(q);

    let a = [];
    for (let i = 0; i < r.length; i++) {
        const dept = r[i]
        a.push(dept.name);
    }
    return a;
}

async function getRoles() {
    let q = "SELECT * FROM eRole";
    const r = await connection.query(q);

    let a = [];
    for (let i = 0; i < r.length; i++) {
        const role = r[i]
        a.push(role.name);
    }
    return a;
}

async function getEmployees() {
    let q = "SELECT * FROM employee";
    const r = await connection.query(q);

    let a = [];
    for (const e of r) {
        a.push(e.first_name + " " + e.last_name);
    }
    return a;
}

// ADD FUNCTIONS
async function getDeptName() {
    inquirer.prompt([
        {
        name: 'newDept',
        type: 'input',
        message: 'What is the name of the new department?',
        validate: validate.validateString
        },
    ])
    .then((a) => {
        let q = "INSERT INTO eDepartment (name) VALES (?)";
        connection.query(q, a.newDepartment, (error, response) => {
            if (e) throw error;
            console.log(`The ` + a.newDepartment + ` has been successfully created!`);
            viewAllDepartments();
        })
    })
}

async function addRole() {

}
async function addEmployee() {

}