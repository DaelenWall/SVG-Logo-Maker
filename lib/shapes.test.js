// imported shapes
const {Circle, Square, Triangle} = require("./shapes")

// shape tests
describe('Circle', () => {
    test('Success!', () => {
        const newShape = new Circle();
        newShape.setColor(this.color);
        expect(shape.render).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`);
    });
});