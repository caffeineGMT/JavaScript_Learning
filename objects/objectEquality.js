//my implementation

function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

function areEqual(address1, address2) {
    for (key in address1) {
        if (key in address2)
            if (address1[key] == address2[key]) return true; //==check if the same value; if object, check if the same id/memory address
    }
    return false;
}

function areSame(address1, address2) {
    if (address1 === address2) return true; //===check if the same type; if object, check if the same id/memory address
    return false; // return address1===address2;
}

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');


console.log(areSame(address1, address2));
console.log(areEqual(address1, address2));