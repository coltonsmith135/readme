
// variables needed to run node and use the input.
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// links generateMarkdown file to connect them together.
const generateMarkdown = require('./utils/generateMarkdown');

// Questions to prompt the user 
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title'
},

{ 
 type:'input',
 message:'what is the project about? Give a detailed description of your project.',
 name:'Description'
},
{
    type:'input',
    message:'What needs to be installed to run the app?',
    name:'Installation'
},
{
    type:'input',
    message:'How is the application used?',
    name:'Usage'
},
{
    type:'input',
    message:'Contact info for inquiries.',
    name:'Contact'
},
{
    type:'input',
    message:'What is your Github username?',
    name:'Github'
},
{
    type:'input',
    message:'What is your github Repo name?',
    name:'Repo'
},
{
    type:'list',
    message:'What license did you use?',
    name:'License',

    choices: ['MIT', 'GPU', 'ISC', 'Apache']
},
{
    type:'input',
    message:'What is your email address?',
    name:'Email'
},
{
    type:'input',
    message:'Who was involved in creating this application?',
    name:'Credits'
},
{
    type:'input',
    message:'How did you test your application',
    name:'Tests'
}];



// function to create and write the file after running through node.
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Congratulations on creating your own README file.')
  })
    
}

// function to initialize program and generate the readme file.
function init() {
    inquirer.prompt(questions)
    .then((data) => {
       const generated = generateMarkdown(data)
       writeToFile('./destination/README.md', generated)
    })
 }


init();
