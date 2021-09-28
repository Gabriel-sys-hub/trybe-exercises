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
  
      expect(resposta).equals('aprovado')
    })
  })
})


// 


describe('Quando a o numero for ', () => {
  describe('Menor que 0', () => {
    it('Retorna "negativo"', () => {
      const resposta = checkNumber(-1);

      expect(resposta).equals('negativo');
    })
    it('O tipo do retorno é uma string', () => {
      const resposta = checkNumber(-1);

      expect(typeof resposta).equals('string');
    })
  })

  describe('Maior que 0', () => {
    it('Retorna "positivo"', () => {
      const resposta = checkNumber(1);

      expect(resposta).equals('positivo');
    })
  })

  describe('Igual há 0', () => {
    it('Retorna "neutro"', () => {
      const resposta = checkNumber(0);

      expect(resposta).equals('neutro');
    })
  })
})
