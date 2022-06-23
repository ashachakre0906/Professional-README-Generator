// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = "./utils/generateMarkdown.js";
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
    message:
      "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use?",
  },
  {
    type: "checkbox",
    name: "License",
    message: "Choose the appropriate license for this project?",
    choices: ["Apache", "GNU", "MIT", "Mozilla", "IBM"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Would you like other developers to contribute?",
  },
  {
    type: "input",
    name: "questions",
    message: "What do i do if i have any questions?",
  },
  {
    type: "input",
    name: "gitHub username",
    message: "Please provide your gitHub username ?",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFile("generateReadMe", data, "utf-8", "err");
    console.log("Your README.md file is sucessfully generated");
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to node.js,Get ready to answer the following prompts");
  inquirer.prompt(questions).then((response) => {
    writeToFile("./README.md", response);
    console.log(response);
  });
}

// Function call to initialize app
init();
