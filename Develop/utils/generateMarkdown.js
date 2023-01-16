
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badges/license-${license}-red.svg)`;
}


function renderLicenseLink(license) {
  return `\n * [License] (#license)\n`;
}


function renderLicenseSection(license) {
  return `\n ## license\n
  ${license}`;
}


function generateMarkdown(data) {


  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title} 
![badge](https://img.shields.io/github/last-commit/${data.Github}/${data.Repo})
${renderLicenseBadge(data.License)}
# Description
${data.Description}
# Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
${renderLicenseLink(data.License)}
* [Credits] (#credits)
* [Tests] (#tests)



## installation

${data.Installation}

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
