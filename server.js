const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require("inquirer");
let Database = require('./db/database.js');

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password!',
    database: "employee_trackerDB"
})

connect.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connect.threadId);
    promptUser();
});

const getDeptId = (name) => {
    let q = "SELECT department_id FROM eRole WHERE title = (?)";
    let x = [name.toString()];
    const obj = connect.query(q, x);
    console.log(obj);
}

const promptUser = () => {
    inquirer.prompt([
        {
            name: 'initialPrompts',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ])
    .then((a) => {
        if (a.initialPrompts === 'View All Departments') {
            viewAllDept();
        }
        if (a.initialPrompts === 'View All Roles') {
            viewAllRoles();
        }
        if (a.initialPrompts === 'View All Employees') {
            viewAllEmployees();
        }
        if (a.initialPrompts === 'Add A Department') {
            addDepartment();
        }
        if (a.initialPrompts === 'Add A Role') {
            addRole();
        }
        if (a.initialPrompts === 'Add An Employee') {
            addEmployee();
        }
        if (a.initialPrompts === 'Update Employee Role') {
            updateEmployee();
        }
        if (a.initialPrompts === 'Exit') {
            connect.end;
        }
    });
}

// VIEW FUNCTIONS
const viewAllDept = () => {
    let q = "SELECT * FROM eDepartment";
    connect.query(q, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
};

const viewAllRoles = () => {
    let q = "SELECT * FROM eRole";
    connect.query(q, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

const viewAllEmployees = () => {
    let q = "SELECT * FROM employee";
    connect.query(q, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

// ADD FUNCTIONS
const addDepartment = () => {
    inquirer.prompt([
        {
            name: "newDept",
            type: "input",
            message: "What is the name of the new department?"
        }
    ])
    .then((a) => {
        let q = "INSERT INTO eDepartment (name) VALUES (?)";
        const r = connect.query(q, a.newDept);
        console.log(a.newDept + " has been successfully added to eDepartment.");
        viewAllDept();
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the new role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the new role?'
        },
        {
            name: 'dept',
            type: 'input',
            message: 'What is the department of the new role?'
        }
    ])
    .then((a) => {
        let q1 = "INSERT INTO eRole (title, salary, department_id) VALUES (?, ?, ?)";
        let newRole = a.name;
        const id = getDeptId(a.dept);
        let obj = [newRole, a.salary, id];
                
        // connect.promise().query(q1, obj, (err) => {
        //     if (e) throw e;
        //     console.log(a.newDept + " has been successfully added to eRole.");
        //     viewAllRoles();
        // })
    })
}
