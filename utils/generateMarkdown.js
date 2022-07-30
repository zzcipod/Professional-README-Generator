function generateMarkdown(data) {
 
  return `# ${data.title}\
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)"
  
  
## Description

${data.description}

## Table of Contents
* [License](#license)
* [Technologies](#technologies)
* [Contributing](#contributing)
* [Questions](#questions)



## License

${data.license}

## Contributing

${data.contributing}


## Questions

If you have any questions, please contact me at one of the following addresses:

${data.questions}

${data.github}
`;
}


module.exports = generateMarkdown;
