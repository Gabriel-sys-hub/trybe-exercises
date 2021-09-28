function calculaNota(nota1, nota2, nota3, nota4, nota5) {
  const calculo = nota1 + nota2 + nota3 + nota4 + nota5 / 5;
  let result = '';

  if (calculo > 6) result = "aprovado";

  result = "reprovado";
  return result;
}

module.exports = calculaNota;
