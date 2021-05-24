let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const total = numbers.reduce((acumulador, numbers) => acumulador + numbers);
//   1 Acumulador - valor inicial(ou o valor do callback anterior); Que é 0
//   2 valorAtual - o valor do elemento atual. que é 5
//   3 index - o indice atual; que é 0
//   4 array - o array onde a interação está correndo; Que é Numbers             
console.log(total);

let mediaAritimetica = total / numbers.length;

console.log(mediaAritimetica)