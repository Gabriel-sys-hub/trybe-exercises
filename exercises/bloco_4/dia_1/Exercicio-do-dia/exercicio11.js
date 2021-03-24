let salario = 1556;
let inss = parseInt(124.48);
let ir = 0;
let salarioBruto = salario - inss - ir;

console.log("Seu salario é :" + salario)
console.log("O que será descontado do INSS será: " + inss + ", e seu IR é isento devido a seu salário.")
console.log("Seu salario final é : " + salarioBruto)
