const fs = require('fs').promises;

// fs.readFile('./simpson.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
// .then((strings) => {
//   strings.forEach((string) => console.log(string));
// });

// async function createSimpsonsFamily() {
// 	const simpsonFamily = await fs.readFile('./simpson.json', 'utf8');
// 	const resultFromSimpson = await JSON.parse(simpsonFamily);
// 	const result = await resultFromSimpson.map(({ id, name }) => `${id} - ${name}`);
// 	const stringResult = result.forEach((string) => console.log(string));
// 	console.log(stringResult);
// 	return stringResult;
// }

async function getSimpsonById(id) {
	const simpsons = await fs.readFile('./simpson.json', 'utf-8').then((fileContent) => JSON.parse(fileContent));

	const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  console.log(chosenSimpson);

	// if (!chosenSimpson) {
	// 	/* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
  //  * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
  //  * tendo como motivo o que passarmos para o `throw`.
  //  * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
  //  */
	// 	throw new Error('id não encontrado');
	// }
}

getSimpsonById(5);
