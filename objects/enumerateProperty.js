const circle = {
    r: 1,
    draw() {}
};

for (let key in circle) {
    console.log(key, circle[key]);
}

console.log(Object.keys(circle));
console.log("r" in circle);