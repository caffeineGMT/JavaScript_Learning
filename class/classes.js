class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // These methods will be added to the prototype. 
    draw() {}

    // This will be available on the Circle class (Circle.parse())
    static parse(str) {}
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size;
    }

    // "Kind of" private method 
    [_draw]() {}

    // By "kind of" I mean: these properties and methods are essentially
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap(); //this needs to be hid by not exporting in the module.
const _move = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
        _move.set(this, () => {
            console.log("move", this); //`this` will inherit outer function's `this`, which is the instance. If not using arrow function, the returned function will be not attached to an object and `this` will refer to window object
        })
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }
}

//setter and getter
const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }
    set radius(value) {
        if (value <= 0) throw new Error("wrong value");
        _radius.set(this, value);
    }
}

module.exports = Circle; //this will hide _radius

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 

// Inheritance 
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Triangle extends Shape { //js engine walk thru the path of prototypical inheritance, it will look up child implementation first and go up to its parent if not find the method
    constructor(color) {
        // To call the base constructor 
        super(color);
    }

    draw() { //method overriding
        // Call the base method 
        super.draw();

        // Do some other stuff here
    }
}

const t = new Triangle("red");
console.log(t);