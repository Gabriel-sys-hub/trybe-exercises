let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOrdened = numbers.sort(sortFunction);

console.log(numbersOrdened)

function sortFunction(a, b) {
  return (a < b)
}