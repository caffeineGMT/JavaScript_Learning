function Circle(r) {
    this.r = r;
}

c = new Circle(1);
console.log(c.constructor);

empty = {};
console.log(empty.constructor);