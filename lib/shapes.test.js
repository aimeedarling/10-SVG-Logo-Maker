// Jest tests for shapes all of the shapes and svg,
const { Circle, Triangle, Square} = require('./shapes')

test ('should render triangle with blue fill color', ()=>{
    
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
test('should render circle with blue fill color', () => {

    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
})
test('should render square with blue fill color', () => {

    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="blue" />`);
})
test('should render a 300 by 200 svg file'), () => {
    const svg = new SVG()
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect(svg.render()).toEqual(expected)
}
