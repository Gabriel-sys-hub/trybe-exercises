const { expect } = require('chai');

const calculaSituacao = require('./calculaSituacao');
const checkNumber = require('./checkNumber');

describe('Quando a média for menor que 7', () => {
	it('retorna "reprovado"', () => {
		const resposta = calculaSituacao(4);

		expect(resposta).equals('reprovado');
	});
});

describe('Quando a média for maior ou igual a 7', () => {
	it('retorna "aprovado"', () => {
		it('retorna "aprovado"', () => {
			const resposta = calculaSituacao(7);

			expect(resposta).equals('aprovado');
		});
	});
});

// ----------------------------------------------------

describe('Quando a o numero for ', () => {

	describe('Menor que 0', () => {
		it('Retorna "negativo"', () => {
			const resposta = checkNumber(-1);

			expect(resposta).equals('negativo');
		});
		it('O tipo do retorno é uma string', () => {
			const resposta = checkNumber(-1);

			expect(typeof resposta).equals('string');
		});
	});

	describe('Maior que 0', () => {
		it('Retorna "positivo"', () => {
			const resposta = checkNumber(1);

			expect(resposta).equals('positivo');
		});
	});

	describe('Igual há 0', () => {
		it('Retorna "neutro"', () => {
			const resposta = checkNumber(0);

			expect(resposta).equals('neutro');
		});
	});
});

// -----------------------------------------

describe('Caso o valor informado não seja um numero', () => {
	it('Retorna "O valor informado não é um numero!"', () => {
		const numberOrNot = checkNumber('oi');

		expect(numberOrNot).equals('O valor informado não é um numero!');
	});
});

// -----------------------------------------

const fs = require('fs');
const sinon = require('sinon');

const escrevaArquivo = require('./createAFile');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', 'Bom dia amigos da rede globo....');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('Ok!');
    });
  });
});
