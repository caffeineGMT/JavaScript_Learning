const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  alert(e);
}



function countOccurrences(array, searchElement) {
  if (typeof array !== 'object') throw new Error('value is not array');
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}