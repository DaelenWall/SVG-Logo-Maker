# SVG-Logo-Maker
UConn Bootcamp Chapter 10 OOP Challenge

## Description
In this chapter 10 challenge I took my knowledge of OOP and used it to create an SVG Logo Generator.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this SVG Logo Generator for projects or as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was installing 'inquirer 8.2.4', 'jest' and, 'fs' so that I could create my user prompts.  I also added in an 'index.js' file and a 'lib' folder to hold all of my edited 'shapes' files.
![svgsidebarimg]("")


* The next step was to start my shapes.js where I added in constructor class, 'Shapes', and my individual shape classes with render functions all within the constructor.  These are used to render an accurately sized and proportioned shape with a user-chosen color. 
![shapesjsimg]("")


* Next, I imported my shapes to shapes.test.js and started working on my shapes tests. These would create a new shape based off user input.  Once I got one test working, I then duplicated it to get the other two.
![shapestestjsimg]("")


* The next step was to start my index.js where I added in my requirements and my inquirer prompts.  These are used to create prompts for the user that will eventually be turned into data that is used to create the generated SVG file. 
![svginquirerimg]("")


* Then, I added in a new const called 'init', which is designed to initiate or generate the actual file.  This is essentially what creates 'logo.svg', the new generated SVG file.  It will also catch errors if they were to occur.
![svginitimg]("")

* Then, I added in a constructor class function titled 'renderSVG' which is designed to import text and shape elements into the SVG file that will be rendered.  
![svgrenderimg]("")

* Finally, I added in my object elements, user answer parameters, and a 'writeFile' function for logo.svg.  The object elements and parameters were added in to ensure that the user could not enter in more false answers to the inquired questions.  For example, text longer than 3 characters should return an error and a message because it wouldn't be able to fit inside the dimensions of the shape.
![svgparametersimg]("")


## Walkthrough


## Conclusion
Overall, this was a great first OOP project.  I enjoyed using the 'inquirer' extension and the action of creating files using a function was very interesting to me as previously we had only done it in the terminal.  It was a definitely very difficult for me to get the test.js to be fully functional, but it was all worth it in the end.