INSERT INTO eDepartment (name) VALUES ('Sales');
INSERT INTO eDepartment (name) VALUES ('Engineering');
INSERT INTO eDepartment (name) VALUES ('Finance');
INSERT INTO eDepartment (name) VALUES ('Legal');

INSERT INTO eRole (title, salary, department_id) VALUES ('Legal Team Lead', 1000000, 700);
INSERT INTO eRole (title, salary, department_id) VALUES ('Lawyer', 900000, 600);
INSERT INTO eRole (title, salary, department_id) VALUES ('Accountant', 800000, 500);
INSERT INTO eRole (title, salary, department_id) VALUES ('Lead Engineer', 700000, 400);
INSERT INTO eRole (title, salary, department_id) VALUES ('Software Engineer', 600000, 300);
INSERT INTO eRole (title, salary, department_id) VALUES ('Sales Lead', 500000, 200);
INSERT INTO eRole (title, salary, department_id) VALUES ('Salesperson', 400000, 100);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Fiona', 'Gallagher', 700, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Phillip', 'Gallagher', 500, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ian', 'Gallagher', 600, 700);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Carl', 'Gallagher', 300, 400);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Debbie', 'Gallagher', 400, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Liam', 'Gallagher', 100, 200);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Frank', 'Gallagher', 200, NULL);
