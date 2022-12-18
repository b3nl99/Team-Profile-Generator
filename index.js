const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./Develop/src/generateHTMLPage');
const Manager = require('./Develop/lib/Manager');
const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer');

class Prompt {
    constructor() {
        this.teamArray = [];
    }

    getTeamArray() {
        return this.teamArray;
    }

    questions() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'employeeType',
                message: "Which type of employee whould like to add to the team?",
                choices: ['Manager', 'Engineer', 'Intern', 'I finished entering my team info']
            })

            .then(({employeeType}) =>{
                if(employeeType === 'Manager'){
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the manager's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the manager's name.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the manager's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the manager's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct manager's email.");
                                    return false
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Please enter the manager's office number",
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the office nubmer should be number.");
                                    return false;
                                }
                            }
                        },
                    ])
                    
                    .then((templateData) => {
                        const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                        this.teamArray.push(newManager);
                        this.questions();
                    });
                } else if (employeeType === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username.");
                                    return false;
                                }
                            }
                        },
                    ])
                    
                    .then(templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamArray.push(newEngineer);
                        this.questions();
                    });
                } else if (employeeType === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name.");
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number.");
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school's name.");
                                    return false;
                                }
                            }
                        },
                    ])
                    
                    .then(templateData => {
                        const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school)
                        this.teamArray.push(newIntern);
                        this.questions();
                    });
                } else if (employeeType === 'I finished entering my team info') {
                    const pagehtml = generateHTML(this.getTeamArray());
                    fs.writeFile( './dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);
                        console.log('Page created! Checkout index.html in the dist/folder to see it!');
                    });

                }


            });

    }
        
};

const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;
