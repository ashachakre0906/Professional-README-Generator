# README Generator
## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
## Description
The purpose of this project to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.`fs` for writing to the file system and`inquirer`package for collecting user input.
The application will be invoked by using the following command `node index.js`.
## Application Demo
<iframe src="https://drive.google.com/file/d/1JEvUXe9dDyd96IKUV4s-zD-dRa5q_IoY/preview" width="640" height="480" allow="autoplay"></iframe>
## Installation
* Install Node in your computer by going to `https://nodejs.org/en/download/`
* Create .gitignore file before installing any npm dependencies and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.
* Create a new github repository and clone it to your local machine.
* Navigate to the repo which you just created by typing`cd` command  and open it in your code editor by typing the command in your terminal `code .`
* Open the terminal in your code editor,initialized the repository with a `package.json` file by running `npm init -y`.
* Install the `Inquirer package`by entering teh command `npm install inquirer` which will collect the user inputs.
* Application will be invoked by using the following command:
```bash
node index.js
```
## Usage
### Code Examples and Screenshots
***Function to render the License badge***

<img src = "./assets/screenshot.png">

***Function to write the user input to the README.md file***
```
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
```

## Contributing
not contributing at this time.
## License
This project is license under the [License: MIT](https://opensource.org/licenses/MIT)
## Tests
We dont have any test at this moment.
## Technologies Used
![Java Badge](https://img.shields.io/badge/language-Javascript-blue.svg)
![Node.js Badge](https://img.shields.io/badge/language-Node-yellow.svg)
![Inquirer Badge](https://img.shields.io/badge/language-Inquirer-orange.svg)

## Questions
Github Repo URL: [Github](https://github.com/ashachakre0906)<br>
Email Address: chourpagar.asha@gmail.com

