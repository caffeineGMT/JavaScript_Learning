console.log(sum(10));

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;

  return sum;
}


//my implementation

/* function sum(limit) {
  let sum = 0;
  let multipleThree = 3;
  let multipleFive = 5;
  // add seperation line for better readability
  while (multipleThree <= limit) {
    sum += multipleThree;
    multipleThree += 3;
    if (multipleFive <= limit && multipleFive % 3 !== 0) {
      sum += multipleFive;
      multipleFive += 5;
    }
  }
  // add seperation line for better readability
  return sum;
}

console.log(sum(15)); */