const circle = {};

circle.a = "a";
circle.b = "b";
circle.c = "c";
console.log(circle);

delete circle.b;
delete circle["c"];
console.log(circle);