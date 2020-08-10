showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

//my implementation
/* function showNumber(limits) {
  for (let i = 0; i <= limits; i++) {
      if (i % 2 === 0) console.log(i, "EVEN");
      else console.log(i, "ODD");
  }
}

showNumber(15); */