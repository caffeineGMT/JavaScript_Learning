const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

//my implementation
/* const num = [1, 2, 3, 4];
console.log(includes(num, 0));

function includes(array, searchElement) {
  for (let i of array) {
    if (i === searchElement) return true;
  }
  return false;
}
 */