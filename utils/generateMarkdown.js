// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache 2.0'){
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  else if (license === 'Boost'){
    return '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
  
  }
  else if (license === 'MIT'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Mozilla'){
    return yourLicense === '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
  else if (license === 'IBM'){
    return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
  }
  else if  (license === 'none') {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  else return `[License](#license)`  

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none'){
    return '';
  }
  if(license === 'Apache 2.0'){
    return  `## License
This project is license under the [License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'Boost'){
    return  `## License
  This project is license under the [License: Boost](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === 'MIT'){
    return  `## License
  This project is license under the [License: MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Mozilla'){
    return  `## License
  This project is license under the[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'IBM'){
    return  `## License
  This project is license under thes '[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === 'none') {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
## License
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- ${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Contact](#contact)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
${renderLicenseSection(data.license)}
## Tests
${data.tests}
## Questions
Github Repo URL: [Github](https://github.com/${data.username})<br>
Email: ${data.email}
 `;
}
module.exports = generateMarkdown;//exporting the variables, functions and objects into index.js
