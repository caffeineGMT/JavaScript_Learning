const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max; 

  return array.reduce((a, b) => (a > b) ? a : b);
}

//my implementation
/* const num = [1, 4, 3];
const output = getMax(num);
console.log(output); */

//solution 1

/* function getMax(array) {
  let max = array[0];
  for (let i of array) {
    if (i > max) max = i;
  }
  return max;
} */

//solution 2
// whenever we want to reduce an array to a single value, think of reduce() function
/* function getMax(array) {
  const max = array.reduce((acc, cur) => {
    if (cur > acc) return cur;
    return acc;
  }, array[0]);
  return max;
} */