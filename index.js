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

// write SVG function
  const writeSVG = (filename, data) => {
    console.log("Creating your logo!");
    fs.writeFile(filename, data, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("logo.svg created!");
    })
  }
  
// object text/shape elements
class renderSVG{
  constructor() {
    this.userText = ''
    this.userShape = ''
  };
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.userText} ${this.userShape} </svg>`
  };
  newText(text, color) {
    this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}SVG</text>`
  };
  newShape(shape) {
    this.userShape = shape.render();
  };

};

  