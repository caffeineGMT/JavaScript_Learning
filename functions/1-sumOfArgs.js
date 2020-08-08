console.log(sum([1, 2, 3, 4]));

function sum(...items) { //rest operator
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items]; //flatten the structure, spread operator

  return items.reduce((a, b) => a + b);
}

//my implementation
/* function sum() {
  let total = 0;
  if (Array.isArray(arguments[0])) {
      for (let value of arguments[0]) {
          total += value;
      }
      return total;
  }
  for (let value of arguments) {
      total += value;
  }
  return total;
}

console.log(sum([1, 2])); */