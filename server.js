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
        // const cursor = a;

        if (a.initialPrompts === 'View All Departments') {
            viewAllDept();
        }
        if (a.initialPrompts === 'View All Roles') {
            viewAllRoles();
        }
        if (a.initialPrompts === 'View All Employees') {
            viewAllEmployees();
        }
        if (a.initialPrompts === 'Add A Departments') {
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

async function viewAllRoles() {
    let q = "SELECT * FROM eRole";
    connect.query(q, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

async function viewAllEmployees() {
    // let q = "SELECT * FROM employee";
    // const r = await connect.query(q);

    // let a = [];
    // for (const e of r) {
    //     a.push(e.first_name + " " + e.last_name);
    // }
    // return a;
}

// ADD FUNCTIONS
const addDepartment = () => {
    // inquirer.prompt([
    //     {
    //     name: 'newDept',
    //     type: 'input',
    //     message: 'What is the name of the new department?',
    //     validate: validate.validateString
    //     },
    // ])
    // .then((a) => {
    //     let q = "INSERT INTO eDepartment (name) VALES (?)";
    //     connect.query(q, a.newDepartment, (error, response) => {
    //         if (e) throw error;
    //         console.log(`The ` + a.newDepartment + ` has been successfully created!`);
    //         viewAllDepartments();
    //     })
    // })
}

const addRole = (deptInfo) => {
    // inquirer.prompt([
    //     {
    //         name: 'name',
    //         type: 'input',
    //         message: 'What is the name of the new role?'
    //     },
    //     {
    //         name: 'salary',
    //         type: 'input',
    //         message: 'What is the salary of the new role?'
    //     },
    //     {
    //         name: 'department',
    //         type: 'list',
    //         message: 'What is the department of the new role?',
    //         choices: [...eDepartment]
    //     }
    // ])
    // .then((a) => {
    //     let newRole = a.name;
    //     let departmentId;
       
    //     response.forEach((department) => {
    //         if (deptInfo.department === eDepartment.name) {
    //             departmentId = eDepartment.id;
    //         }
    //     });
        
    //     let q = "INSERT INTO eRole (title, salary, department_id) VALES (?, ?, ?)";
    //     let create = [newRole, a.salary, departmentId];  
    //    connect.promise().query(q, create, (error) => {
    //         if (err) throw error;
    //         console.log(`The ` + create + ` has been successfully created!`);
    //         viewAllRoles();  
    //    })
    // })
}

const addEmployee = () => {
    // inquirer.prompt([
    //     {
    //         type: input,
    //         name: fName,
    //         message: "What is the Employee's first name?"
    //     },
    //     {
    //         type: input,
    //         name: lName,
    //         message: "What is the Employee's last name?"
    //     },
    //     {
    //         type: list,
    //         name: newRole,
    //         choices: [...eRole]

    //     },
    //     {
    //         type: list,
    //         name: manager,
    //         message: "Who is the Employee's manager?",
    //         choices: managers
    //     }
    // ])
}