// Jest tests for shapes all of the shapes and svg,
const { Circle, Triangle, Square} = require('./shapes');
const SVG = require('./svg');

test ('should render triangle with pink fill color', ()=>{
    
    const shape = new Triangle();
    shape.setColor('pink');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink" />');
})
test('should render circle with pink fill color', () => {

    const shape = new Circle();
    shape.setColor('pink');
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="pink" />`);
})
test('should render square with pink fill color', () => {

    const shape = new Square();
    shape.setColor('pink');
    expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="pink" />`);
})
test('should render a 300 by 200 svg file', () => {
    
    const svg = new SVG();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect(svg.render()).toEqual(expected)
})

test('should render an svg file with a triangle shape', () => {
    const svg = new SVG();
    svg.setShape(new Triangle());
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="\" /></svg>`
    expect(svg.render()).toEqual(expected)
})

test('should render an svg file with the initials AMD', () => {
    const svg = new SVG();
    svg.setText('AMD', 'white');
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AMD</text></svg>`
    expect(svg.render()).toEqual(expected)
})