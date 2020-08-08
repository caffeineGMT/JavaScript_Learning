
try {
  const numbers = [1, 2, 3, 4]; 
  const count = countOccurrences(null, 1); 
  console.log(count); 
}
catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

//implementation
/* const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  alert(e);
}

function countOccurrences(array, searchElement) {
  if (typeof array !== 'object') throw new Error('value is not array');// this should use isArray()
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
} */