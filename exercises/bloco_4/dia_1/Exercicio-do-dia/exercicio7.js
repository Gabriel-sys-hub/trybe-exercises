let nota1 = "A"
let nota2 = "B"
let nota3 = "C"
let nota4 = "D"
let nota5 = "E"
let nota6 = "F"
let erro = "Erro, nota não existe!"

let notaEmPorcentagem = -100;

if (notaEmPorcentagem >= 90) {
  console.log(nota1)
} else if (notaEmPorcentagem >= 80) {
  console.log(nota2)
} else if (notaEmPorcentagem >= 70) {
  console.log(nota3)
} else if (notaEmPorcentagem >= 60) {
  console.log(nota4)
} else if (notaEmPorcentagem >= 50) {
  console.log(nota5)
} else if (notaEmPorcentagem < 50) {
  console.log(nota6)
} else if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100) {
  console.log(erro)
} else {
  console.log("Não use letras no lugar das notas")
}
