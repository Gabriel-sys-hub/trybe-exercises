const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

const [firstString, secondString] = saudacoes;
console.log(secondString(firstString));

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[animal, bebida, comida] = [comida, animal, bebida];
console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12]