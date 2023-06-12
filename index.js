const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: "What shape do you want your logo to be?",
            choices: [ 'triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'background-color',
            message: 'What color background?'
        },
        {
            type: 'input',
            name: 'font-color',
            message: 'What color font?'
        },
        {
            type: 'input',
            name: 'initials',
            message: 'What initials (up to three)?'
        }

    ])
    .then ((data) => {
        //use user feedback for whatever"
        const fileName = 'logo.svg'
        fs.writeFile('')
    })
    .caths((error) => {
        if(error.isTtyError) {
            //prompt couldn't be rendered in the current environment
        } else {
            //something else went wrong
        }
    })