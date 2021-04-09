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
    .then((a) => {
        const {choices} = a;
        if (a.choices === 'View All Departments') {
            viewAllDepartments();
        }
        if (a.choices === 'View All Roles') {
            viewAllRoles();
        }
        if (a.choices === 'View All Employees') {
            viewAllEmployees();
        }
        if (a.choices === 'Add A Departments') {
            addDepartment();
        }
        if (a.choices === 'Add A Role') {
            addRole();
        }
        if (a.choices === 'Add An Employee') {
            addEmployee();
        }
        if (a.choices === 'Update Employee Role') {
            updateEmployee();
        }
        if (a.choices === 'Exit') {
            connection.end;
        }
    });
}

// VIEW FUNCTIONS
async function viewAllDepartments() {
    let q = "SELECT * FROM eDepartment";
    const r = await connection.query(q);

    let a = [];
    for (let i = 0; i < r.length; i++) {
        const dept = r[i]
        a.push(dept.name);
    }
    return a;
}

async function viewAllRoles() {
    let q = "SELECT * FROM eRole";
    const r = await connection.query(q);

    let a = [];
    for (let i = 0; i < r.length; i++) {
        const role = r[i]
        a.push(role.name);
    }
    return a;
}

async function viewAllEmployees() {
    let q = "SELECT * FROM employee";
    const r = await connection.query(q);

    let a = [];
    for (const e of r) {
        a.push(e.first_name + " " + e.last_name);
    }
    return a;
}

// ADD FUNCTIONS
const addDepartment = () => {
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

const addRole = (deptInfo) => {
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
            name: 'department',
            type: 'list',
            message: 'What is the department of the new role?',
            choices: [...eDepartment]
        }
    ])
    .then((a) => {
        let newRole = a.name;
        let departmentId;
       
        response.forEach((department) => {
            if (deptInfo.department === eDepartment.name) {
                departmentId = eDepartment.id;
            }
        });
        
        let q = "INSERT INTO eRole (title, salary, department_id) VALES (?, ?, ?)";
        let create = [newRole, a.salary, departmentId];  
       connection.promise().query(q, create, (error) => {
            if (err) throw error;
            console.log(`The ` + create + ` has been successfully created!`);
            viewAllRoles();  
       })
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: input,
            name: fName,
            message: "What is the Employee's first name?"
        },
        {
            type: input,
            name: lName,
            message: "What is the Employee's last name?"
        },
        {
            type: list,
            name: newRole,
            choices: [...eRole]

        },
        {
            type: list,
            name: manager,
            message: "Who is the Employee's manager?",
            choices: managers
        }
    ])
}