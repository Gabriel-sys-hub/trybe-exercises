let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maxValueOfArray = numbers.reduce((acumulador, valorAtual) => {
  return Math.min(acumulador, valorAtual)
});
//   1 Acumulador - valor inicial(ou o valor do callback anterior); Que é 0
//   2 valorAtual - o valor do elemento atual. que é 5
//   3  -  Vai percorrer todo array e a função Math.min vai saber qual maior numero do Array.
console.log(maxValueOfArray)