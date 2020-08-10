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
}

const c = new Circle(1);
c.draw();