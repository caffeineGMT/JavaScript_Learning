const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);
  return output;
}


//my implementation
/* const num = [1, 2, 3, 4, 1, 1];
const output = except(num, [1, 2]);
console.log(output);

function except(array, exclude) {
  let newArray = [];
  for (let i of array) {
    if (!includes(exclude, i)) {
      newArray.push(i);
    }
  }
  return newArray;
}

function includes(array, searchElement) {
  for (let i of array) {
    if (i === searchElement) return true;
  }
  return false;
} */