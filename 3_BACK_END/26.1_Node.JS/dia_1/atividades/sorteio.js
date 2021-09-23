const readline = require('readline-sync');

function getRandomArbitrary(min, max) {
  const numero = readline.questionInt('Qual será o numero? ');
  const random = (Math.random() * (max - min) + min).toFixed(0);
  console.log(random);
  
  if (numero === random) {
    console.log('Parabéns você acertou')
  } else {
    console.log('Opa, não foi dessa vez')
  }

  const jogarNovamente = readline.question('Quer jogar novamente? ');

  if (jogarNovamente === 'Sim') {
    getRandomArbitrary(0, 10)
  } else {
    console.log('Boa sorte na vida Jovém')
  }


}

getRandomArbitrary(0, 10);