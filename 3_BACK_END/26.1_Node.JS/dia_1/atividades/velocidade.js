const readline = require('readline-sync');

const distancia = readline.questionInt('Distância percorrida (m): ');
const tempo = readline.questionInt('Tempo gasto (s):  ');

function calculaVelocidade () {

  console.log(`Tempo: ${tempo}, Distância: ${distancia}`);

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);

}

calculaVelocidade();