// Crie uma função que recebe três parâmetros retorna uma Promise .

// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function onlyNumbers(num1, num2, num3) {
	const promise = new Promise((resolve, reject) => {
		if (typeof num1 !== 'number' && typeof num2 !== 'number' && typeof num3 !== 'number')
			reject(new Error('Informe apenas numeros'));

		const sum = num1 + num2;
		const result = sum * num3;

		if (result < 50) reject(new Error('Valor muito baixo'));

		resolve(result);
	});

	return promise;
}

onlyNumbers(10, 10, 10).then((resolve) => console.log(resolve)).catch((error) => console.log(error));

onlyNumbers(1, 1, 'a').then((resolve) => console.log(resolve)).catch((error) => console.log(error));

onlyNumbers(1, 1, 1).then((resolve) => console.log(resolve)).catch((error) => console.log(error));

function getRandomNumber() {
	return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
	const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

	try {
		const result = await onlyNumbers(...randomNumbers);
		console.log(result);
	} catch (err) {
		console.error(err);
	}
}

console.log(callDoMath());
