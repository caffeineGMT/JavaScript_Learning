function Circle(r) {
    this.r = r;
}
console.log(Circle.constructor); //Circle function is created by Function 

const Circle1 = new Function("r", `this.r = r;`); //Circle function is created by Function 
const another = new Circle1(2);
console.log(another);

const x = {}
Circle.call(x, 3); //the constructor is doing this under the hood. Calling the function on "x"
console.log(x);
Circle.apply(x, [5, 3, 1]); //same as call, but this time the arguments will be passed as an array
console.log(x);