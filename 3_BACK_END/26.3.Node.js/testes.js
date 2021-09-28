const { expect } = require('chai');

const calculaSituacao = require('./calculaSituacao');

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
