let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var values;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    values = numbers[index];
    break;
  } else {
    console.log("Nenhum valor ímpar encontrado")
  }
}

console.log (values)