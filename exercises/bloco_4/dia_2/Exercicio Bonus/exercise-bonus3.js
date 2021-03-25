let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for (let index = 0; index < numbers.length - 1; index++) {
  multipliedNumbers.push(numbers[index] * numbers[index + 1])
}

console.log(numbers.length - 1)
console.log(multipliedNumbers)
