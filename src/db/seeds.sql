INSERT INTO department(id, name)
VALUES
(1, 'sales' ),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');



INSERT INTO role(id, title , salary, department_id)
VALUES
(1, 'Sales lead', 100000, 1),
(2, 'Lead Engineer', 150000, 2),
(3, 'Account Manager', 160000, 3),
(4, 'Legal team klaed', 250000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Josuke', 'Higashikata', 1, NULL),
('Joseph', 'Joestar', 2, 1),
('Caeser', 'Zepelli', 3, NULL),
('Toji', 'Zenin', 4, 3),
('Kentaro', 'Miura', 5, NULL),
('Hirohiko', 'Araki', 6, 5),
('Shinji', 'Ikari', 7, NULL),
('Miyamoto', 'Musashi', 8, 7);