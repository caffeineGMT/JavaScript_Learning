# JavaScript Note

This is a repo recording any important note or thought when learning JavaScript. Most of the note/solution will be based on MOOC course "Code with Mosh" JavaScript Series.

## Object - Undefined and Null

### August 8th, 2020 - Saturday

**project:** It is a bit weird to read MDZ's JavaScript document. Especially `[,` symbol is very hard to understand

**note:**

**link:**

## Object

### August 9th, 2020 - Sunday

**project:** transfer all code note for Object section

**note:**

- object literal: this can have issue when object have "behavior", function would be duplicated in different object
- [factory function](../objects/11-factoryFunction&constructorFunction.js)

**link:**

## Function - Array.map() and Array.filter()

### August 8th, 2020 - Friday

**project:** understand map and filter func, compare them with Java's similar function

**note:**

- In Java, map function is `function interface`, and filter function is `predicates interface`.
- In Java, the above two interface requires a concrete implementation. In order to use the function, it has to generate from a class which implement the interface. This is called functional interface. Anonymous class and lambda expression are used to quickly provide implementation detail.
- In JS, the above two methods are very similar to Java's concept but the function itself is an object and expect an function object being passed as argument.

**link:**

- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Function - How to read JavaScript document

### August 8th, 2020 - Saturday

**project:** It is a bit weird to read MDN's JavaScript document. Especially `[,` symbol is very hard to understand

**note:**

- `[,xxx]`is optional argument

**link:** [detailed explaination](http://cassandrawilcox.me/beginners-guide-developer-documentation/)

## Modules - Module

### August 7th, 2020 - Thursday

**project:** Question: what is Node.JS?

**note:**

- CommonJS: module.export is an object, we could export the whole class, or attach some object to the export object as properties
- ES6: can use export&export default, when importing, need to use import/import {}
- there is an issue importing the module, that can be fixe in [index.js](https://ui.dev/javascript-modules-iifes-commonjs-esmodules/)

**link:** [solution repo](../module)

## Modules - Node.JS, npm, V8: term kick-off

### August 7th, 2020 - Thursday

**project:** Question: what is Node.JS?

**note:**

- Node.js is a javascript runtime built on JavaScript V8 Engine, written in C++
- JS can only access browser, with NodeJs, it can access local machine and can be used for building utilities, web server, file control, etc
- `npm init` can package the dependencies and create a package.json file for providing dependency info, `npm install` will use this json file to install the required package
- V8 is a high-performance interpreter, help transferring JS code to machine code. It is running in browser but Node.js wraps it and make it run in local machine
- `package-lock.json` is another package version control file, usually we only need to adjust `package.json`

**link:** [youtube](https://www.youtube.com/watch?v=pU9Q6oiQNd0)

```

```
