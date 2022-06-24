// TODO: Include packages needed for this application
//// Import the filesystem module
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project ?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a short description of your project?",
  },
  {
    type: "input",
    name: "Installation",
    message:"What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use?",
  },
  {
    type: "list",
    name: "License",
    message: "Choose the appropriate license?",
    choices: ["Apache 2.0", "Boost", "MIT", "Mozilla", "IBM","none"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Would you like other developers to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "Did you write any test for your application?",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your gitHub username ?",
    default:'Asha Chakre',
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // console.log(fileName);
  // console.log(data);
    fs.writeFile(fileName, generateReadMe(data),'utf-8',(err) =>{
        if (err)
        console.log(err);
        else {
            console.log('"Success! Your README.md file has been generated"')
        }
    })
};
//   try {
//     fs.writeFile("generateReadMe", data, "utf-8", "err");
//     console.log("Your README.md file is sucessfully generated");
//   } catch (err) {
//     console.error(err);
//   }
// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to Node !!Are you ready to generate README.md");
  inquirer.prompt(questions).then((response) => {
    writeToFile('./README.md', response);
    console.log(response);
  });
}

// Function call to initialize app
init();
