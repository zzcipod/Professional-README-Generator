const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require('inquirer');
const fs=require('fs');

const questions = [];

// TODO: Create a function to initialize app
function init() {

inquirer
    .prompt([
        {
            type:'input',
            name:'Title',
            message:'Please enter your project title here.',
        },
        {
            type:'input',
            name:'Description',
            message:'Please enter your project description here.',
        },
        {
            type:'input',
            name:'Username',
            message:'Please enter your project username here.',
        },
        {
            type:'input',
            name:'Email',
            message:'Please enter your project e-mail here.',
        },
        {
            type:'input',
            name:'License',
            message:'Please enter your project license here.',
        },
    ])
.then ((answers)=> writeToFile(answers));






.then (data) =>
fs.writeFile('README.md',dataInput,(err)=>
    err ? console.log(err) : console.log('file created!')   
)
}
