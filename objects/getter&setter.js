function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {
        x: 0,
        y: 0
    };

    let compute = function () {}

    this.draw = function () {
        compute();
        console.log(defaultLocation); //can access parent function, this is closure in action
        console.log(this.radius); //this point to current object
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            //can add logic to validate data here
            defaultLocation = value;
        }
    })
}

const c = new Circle(1);
console.log(Object.getOwnPropertyNames(c));