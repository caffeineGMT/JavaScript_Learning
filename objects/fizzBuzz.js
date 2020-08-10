const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN;

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';

  return input;
}

//my implementation

/* function fizzBuzz(num) {
  if (num % 15 === 0) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  if (typeof num !== 'number') return NaN; // this line should be checked first
  return num;
}

console.log(fizzBuzz('t')); */