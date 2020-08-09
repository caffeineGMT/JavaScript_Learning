// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules 

// CommonJS (Used in Node)
const Circle = require('./circle');
console.log(Circle);


// ES6 Modules (Used in Browser)
// import a from "./square.js";
import {
    Square
} from "./square.mjs";

// We use Babel to transpile our modern JavaScript code 
// into code that browsers can understand (typically ES5). 

// We use Webpack to combine our JavaScript files into a
// bundle. 