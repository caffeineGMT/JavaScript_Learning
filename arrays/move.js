const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array]; // use spread operator to make a shallow copy
  const element = output.splice(index, 1)[0]; // delete
  output.splice(position, 0, element); // insert
  return output;
}


//my implementation
/* const num = [1, 2, 3, 4];
const output = move(num, 1, -2);
console.log(output);

function move(array, index, offset) {
  let newIndex = index + offset;
  let output = except(array, array[index]);
  if (newIndex > output.length || newIndex < 0) {
    console.error("Invalid Offset");
    return;
  }
  output.splice(newIndex, 0, array[index]);
  return output;
}

function except(array, exclude) {
  let newArray = [];
  for (let i of array) {
    if (i !== exclude) {
      newArray.push(i);
    }
  }
  return newArray;
} */