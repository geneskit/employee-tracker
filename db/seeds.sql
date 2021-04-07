INSERT INTO eDepartment (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO eRole (title, salary, department_id)
VALUES 
('Legal Team Lead', 1000000, 700),
('Lawyer', 900000, 600),
('Accountant', 800000, 500),
('Lead Engineer', 700000, 400),
('Software Engineer', 600000, 300),
('Sales Lead', 500000, 200),
('Salesperson', 400000, 100);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', , ),
