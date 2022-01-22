const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamObj = [];

function promptUser() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'teamName',
        message: 'What is the name of your team for this project? (Required)',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name for your team!');
            return false;
          }
        },
      },
    ])
    .then((teamNameData) => {
      const teamName = teamNameData.teamName;
      teamObj.push(teamName);
      //function to add a team manager
      addManager();
    });
}

//prompt manager information
function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please your team manager's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('You must enter a name for your team manager.');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter team manager's ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter a valid id for team's manager."
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter team manager's email address.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(
              "This is a required field. You must enter team manager's email address."
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter team manager's office number",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter team manager's office number."
            );
            return false;
          }
        },
      },
    ])
    .then(function (managerData) {
      const managerName = managerData.name;
      const managerId = managerData.id;
      const managerEmail = managerData.email;
      const managerOfficeNumber = managerData.officeNumber;
      const teamMember = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );
      teamObj.push(teamMember);
      // function to add additional employees
      addNewEmployee();
    });
}

function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        choices: [
          'Yes: Add Engineer',
          'Yes: Add Intern',
          'No: Generate Team Profile',
        ],
      },
    ])
    .then(function (newEmployeeData) {
      switch (newEmployeeData.newEmployee) {
        //choose case based on choice selected
        case 'Yes: Add Engineer':
          newEngineer();
          break;
        case 'Yes: Add Intern':
          addIntern();
          break;
        case 'No: Generate Team Profile':
          pageTemplate();
          break;
      }
    });
}

//When user chooses to add new engineer, prompts AddEngineer()
function newEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter engineer's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              "This is a required field. You must enter engineer's name!"
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter engineer's ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter engineer's ID!"
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter engineer's email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter engineer's email address."
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter engineer's Github username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter engineer's Github username."
            );
            return false;
          }
        },
      },
    ])
    .then(function (engineerData) {
      const engineerName = engineerData.name;
      const engineerId = engineerData.id;
      const engineerEmail = engineerData.email;
      const engineerGithub = engineerData.github;
      const teamMember = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      teamObj.push(teamMember);
      addNewEmployee();
    });
}

//When user chooses to add new intern, prompts AddIntern()
function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter intern's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter intern's name!"
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter intern's ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("This is a required field. Please enter intern's ID.");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter intern's email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter intern's email address."
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter intern's school:",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log(
              "This is a required field. Please enter intern's school."
            );
            return false;
          }
        },
      },
    ])
    .then(function (internData) {
      const internName = internData.name;
      const internId = internData.id;
      const internEmail = internData.email;
      const internSchool = internData.school;
      const teamMember = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      teamObj.push(teamMember);
      addNewEmployee();
    });
}

//when user chooses to generate team profile
function pageTemplate() {
  const htmlObj = [];
  const htmlHeader = `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${teamObj[0]}</title>
        <link rel="stylesheet" href="./style.css">
    </head>
   
    <body>
        <header>
            <h1>${teamObj[0]}</h1>
        </header>
        <div class = "card-container">
    `;
  htmlObj.push(htmlHeader);

  for (let i = 1; i < teamObj.length; i++) {
    let htmlCurrentObj = `
           <div class = "card-member"> 
                <div class = "card-header">
                    <h2>${teamObj[i].name}</h2>
                    <h3>${teamObj[i].role}</h3>
                </div>
                <div class = "card-body">
                    <p>Employee ID: ${teamObj[i].id}</p>
                    <p>Email: <a href = "mailto: ${teamObj[i].email}">${teamObj[i].email}</a></p>
            `;
    //if office number is included
    if (teamObj[i].officeNumber) {
      htmlCurrentObj += `
            <p>Office Number: ${teamObj[i].officeNumber}</p>
            `;
    }
    // if Github username is included
    if (teamObj[i].github) {
      htmlCurrentObj += `
            <p>Github: <a href = "https://github.com/${teamObj[i].github}">${teamObj[i].github}</a></p>
            `;
    }
    // if School is included
    if (teamObj[i].school) {
      htmlCurrentObj += `
            <p>School: ${teamObj[i].school}</p>
            `;
    }
    htmlCurrentObj += `
        </div>
        </div>
        `;
    //push the current profile to the main htmlObj page
    htmlObj.push(htmlCurrentObj);
  }

  //add and push closing html
  const closeHtmlTags = `
    </div>
    </body>
    </html>
    `;
  htmlObj.push(closeHtmlTags);

  fs.writeFile(`./dist/${teamObj[0]}.html`, htmlObj.join(''), function (err) {
    console.log(`
-----------------------------------------------------------------------------
Your profile has been created and can be accessed in the "dist" folder!
-----------------------------------------------------------------------------
       `);
  });

  fs.copyFile('./src/style.css', './dist/style.css', function (err) {
    console.log('Your HTML file has been updated with style.css');
  });
}

promptUser();
