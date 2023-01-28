function renderLicenseBadge(License) {
  return `[![License: MIT](https://img.shields.io/badge/License-${License}-yellow.svg)](https://opensource.org/licenses/MIT)`;
}


function renderLicenseLink() {
  return `\n * [License](#License)\n`;
  
}


function renderLicenseSection(License) {
  return `\n ## License\n
  ${License}`;
}


function generateMarkdown(data) {


  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}
${renderLicenseBadge(data.License)}
# Description
${data.Description}
# Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.License)}
* [Credits](#credits)
* [Tests](#tests)



## installation

${data.Installation}

## contact info

${data.Email}

${data.Contact}

## usage

${data.Usage}

${renderLicenseSection(data.License)}

## credits

${data.Credits}

## tests

${data.Tests}

`
}

module.exports = generateMarkdown;
