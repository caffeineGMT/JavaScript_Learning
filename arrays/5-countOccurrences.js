const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}


//my implementation
/* const num = [1, 2, 1, 1];
const output = countOccurences(num, 1);
console.log(output); */

//solution 1
/* function countOccurences(array, item) {
  let count = 0;
  for (let i of array) {
    if (i === item) count++;
  }
  return count;
} */

// solution 2

/* function countOccurences(array, item) {
  let count = array.reduce((acc, cur) => {
    if (cur === item) return acc + 1;
    return acc;
  }, 0);
  return count;
}
 */