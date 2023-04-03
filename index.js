// file requirements
const fs = require('fs');
const inquirer = require('fs');
// destructured shape elements
const {Circle, Square, Triangle} = require('./lib/shapes');

// inquirer prompts
const promptUser = [
      {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like for your logo?',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like the shape to be?',
      },
      {
        type: 'input',
        name: 'text',
        message: 'What 3 letter text would you like displayed on your logo?',
      },
      {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like the text to be?',
      },
    ];

  const fileData = (filename, data) => {
    console.log("Creating your logo!");
    fs.writeFile(filename, data, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Logo created!");
    })
  }

  fileData();