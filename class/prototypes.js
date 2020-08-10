// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false, // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function () {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}

//instance member and prototype member, cross referencing
function Circle(radius) {
    //instance member
    this.radius = radius;
    this.move = function () {
        this.draw(); // JS engine cannot find the method in instance, so it will search in Circle.prototype
        console.log("moving");
    }
}

// prototype member
Circle.prototype.draw = function () {
    console.log("drawing");
    this.move;
}