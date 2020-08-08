const person = {
    name: "maitao",
    age: 28
};

for (let key in person) {
    console.log(key, person[key]);
}

const color = ["R", "G", "B"];

for (let index in color) {
    console.log(index, color[index]);
}