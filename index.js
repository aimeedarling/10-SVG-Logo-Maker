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
            name: 'backgroundColor',
            message: 'What color background?'
        },
        {
            type: 'input',
            name: 'fontColor',
            message: 'What color font?'
        },
        {
            type: 'input',
            name: 'text',
            message: 'What initials (up to three)?'
        }

    ])
    .then ((data) => {
        let shape;
        if(data.shape === 'circle'){
            shape = new Circle()
        } else if (data.shape === 'triangle'){
            shape = new Triangle()
        } else {
            shape = new Square()
        }

        shape.setColor(data.backgroundColor)
        
        const svg = new SVG()
        svg.setText(data.text, data.fontColor)

        svg.setShape(shape)

        const fileName = 'logo.svg'
        fs.writeFile(fileName, svg.render(), (error)=>{
            if (error){
                console.log(error)
            } else {
                console.log('Your logo was generated 💅')
            }
        })
    })
    .catch((error) => {
        if(error) {
            console.log(error)
        }
    })