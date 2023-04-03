// imported shapes
const {Circle, Square, Triangle} = require("./shapes")

// shape tests
describe('Circle', () => {
    test('Success!', () => {
        const newShape = new Circle();
        let color =('red')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('Success!', () => {
        const newShape = new Circle();
        let color =('green')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<rect x="150" y="100" fill="${color}" />`);
    });
});

describe('Triangle', () => {
    test('Success!', () => {
        const newShape = new Circle();
        let color =('blue')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<polygon points="200,10 250,150 160,210" fill="${color}" />`);
    });
});