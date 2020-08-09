//implementation detail

const _radius = new WeakMap();

//public interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log("Circle with radius" + _radius.get(this));
    }
}


module.exports = Circle; //this will export the whole class
console.log(module.exports);
// module.exports.a = Circle; //this will export an object with a property called "a" and the value of the property is Circle class object
// console.log(module.exports);