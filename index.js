const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require('inquirer');
const fs=require('fs');



const techArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Mongo",
  ];
  
  const licenseArray = ["IPL", "B50","GPL","MIT"];
  
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Please provide a brief description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the motivation for your project?",
        name: "motivation",
      },

      {
        type: "list",
        message: "Please select a license.",
        name: "license",
        choices: licenseArray,
      },
      {
        type: "checkbox",
        message: "What technologies were used for this application?",
        name: "technologies",
        choices: techArray,
      },
      {
        type: "input",
        message: "How many people contribute to this project?",
        name: "contributing",
      },
  
      {
        type: "input",
        message: "Please enter your email to receive user questions.",
        name: "questions",
      },
      {
        type: "input",
        message: "Please provide your GitHub username for user questions.",
        name: "github",
      },
    ])

.then((answer) => fs.writeFile("README.md", generateMarkdown(answer), err => {
if (err) {
    console.log(err);
} else {
    console.log("A ReadMe file was Successfully Created!");
    };
    })
    );
