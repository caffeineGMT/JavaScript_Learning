//factory function
function creatAddress(s, c, z) {
    const address = {
        street: s, // if key and value are the same, we could just pass in one word
        city: c,
        zipCode: z
    };
    return address;
}

//constructor function
function Address(s, c, z) {
    this.address = s,
        this.street = c,
        this.zipCode = z
}

//factory function
function creatCircle(radius) {
    return {
        radius,
        draw() {}
    };
}

const circle = creatCircle(1);
console.log(circle);
console.log(creatAddress('a', 'b', 'c'));
console.log(new Address("d", "e", "f"));