// Posição da Rainha

let queenRowPosition = 4;
let queenColunmPosition = 4;

// Posição da peça Oponente

let opponentRowPostion = 4;
let opponentColunmPosition = 1;

// Identificar se o ataque foi bem sucedido ou não.

let succesfullAttack = false;

// Se estiver na mesma linha ou coluna, ataque bem sucedido.



// Checar diagonais.

// Inferior Esquerda

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColunm = queenColunmPosition - index;
  if (currentQueenRow === 0 || currentQueenColunm === 0) {
    break;
  }
  if (
    queenColunmPosition === opponentColunmPosition &&
    queenRowPosition === opponentRowPostion
  ) {
    succesfullAttack = true;
  } 
}

// Superior Direita

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColunm = queenColunmPosition + index;
  if (currentQueenRow === 8 || currentQueenColunm === 8) {
    break;
  }
  if (
    queenColunmPosition === opponentColunmPosition &&
    queenRowPosition === opponentRowPostion
  ) {
    succesfullAttack = true;
  } 
}

// Superior Esquerda

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColunm = queenColunmPosition - index;
  if (currentQueenRow === 8 || currentQueenColunm === 0) {
    break;
  }
  if (
    queenColunmPosition === opponentColunmPosition &&
    queenRowPosition === opponentRowPostion
  ) {
    succesfullAttack = true;
  } 
}


// Inferior Direita

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColunm = queenColunmPosition + index;
  if (currentQueenRow === 0 || currentQueenColunm === 8) {
    break;
  }
  if (
    queenColunmPosition === opponentColunmPosition &&
    queenRowPosition === opponentRowPostion
  ) {
    succesfullAttack = true;
  } 
}
console.log(succesfullAttack)