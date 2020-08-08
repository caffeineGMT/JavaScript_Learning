const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
  return count;
}


//my implementation

/* function countTruthy(array) {
  let count = 0;
  for (const item of array) {
    if (
      item !== NaN &&
      item !== "" &&
      item !== undefined &&
      item !== 0 &&
      item !== null &&
      item !== false
    ) {
      count++; // just need to simply pass item here
    }
  }
  return count;
}

const array = [0, NaN, 2, 3, "maitao"];
console.log(countTruthy(array)); */