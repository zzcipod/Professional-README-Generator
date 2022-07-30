const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require('inquirer');
const fs=require('fs');



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

// .then(data) =>
// fs.writeFile('README.md',generateMarkdown(data),(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("A ReadMe file was Successfully Created!")}}


.then((answer) => fs.writeFile("README.md", generateMarkdown(answer), err => {
if (err) {
    console.log(err);
} else {
    console.log("A ReadMe file was Successfully Created!");
    };
    })
    );
