const numbers = arrayFromRange(1, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}

//my implementation
/* const num = arrayFromRange(-10, 4);
console.log(num);

function arrayFromRange(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
} */