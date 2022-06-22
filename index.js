// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        name : 'title',
        message : 'What is the name of your project ?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md',data,'utf-8')
    console.log("file is sucessfully generated")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md',(response))
        console.log(response);
    })
}

// Function call to initialize app
init();

