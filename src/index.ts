import inquirer from 'inquirer';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  password:'Josuke2001',
  host:'localhost',
  database: 'employee_tracker',
  port: 5432

});

inquirer
  .prompt([
   {
    type: 'list',
    name: 'Action',
    message: 'What would you like to do?',
    choices: ['View All Employees','Add Employee','Update Employee Role', 
      'View All Roles', 'Add Role', 'View All Departments', 'Add Department','Quit'
    ]
  }

  ])
  .then(async (answers) => {
    
    if (answers.Action == 'View All Employees'){
      const res = await pool.query('SELECT * FROM employee')
        console.table( res.rows)
        }
        else 
        
        
        if (answers.Action == 'Add Employee'){
          const employeeDetails = await inquirer.prompt([
            {
              type: 'input',
              name: 'first_name',
              message: 'Enter the employee\'s first name:',
            },
            {
              type: 'input',
              name: 'last_name',
              message: 'Enter the employee\'s last name:',
            },
            {
              type: 'input',
              name: 'role_id',
              message: 'Enter the employee\'s role ID:',
            },
            {
              type: 'input',
              name: 'manager_id',
              message: 'Enter the employee\'s manager ID (or leave blank if none):',
            }
          ]);
    
          const { first_name, last_name, role_id, manager_id } = employeeDetails;
          const query = `
            INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            VALUES ($1, $2, $3, $4) RETURNING *;
          `;
          
          const res = await pool.query(query, [first_name, last_name, role_id, manager_id || null]);
          console.log('Employee added:', res.rows[0]);
        }

        else if  (answers.Action == 'View All Roles'){
          const res = await pool.query('SELECT * FROM role')
            console.table( res.rows)
            }

            else if  (answers.Action == 'View All Departments'){
              const res = await pool.query('SELECT * FROM department')
                console.table( res.rows)
            }
      });