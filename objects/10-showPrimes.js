function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;

  return true;
}

//my implementation


/* function showPrimes(limits) {
  for (let num = 2; num <= limits; num++) {
      if (isPrime(num)) console.log(num);
  }
}

function isPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
  return true;
}

showPrimes(20); */