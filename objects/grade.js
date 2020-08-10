function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}


//my implementation

/* function calculateGrade(marks) {
  let sum = 0;
  let average = 0;

  for (mark of marks) { 
      sum += mark;// need to use let on mark first!
  }
  average = sum / marks.length;
  if (average >= 1 && average <= 59) return "F";
  if (average >= 60 && average <= 69) return "D";
  if (average >= 70 && average <= 79) return "C";
  if (average >= 80 && average <= 89) return "B";
  if (average >= 90 && average <= 100) return "A"; // do not need if in the last condition

}

const marks = [80, 80, 50];
console.log(calculateGrade(marks)); */