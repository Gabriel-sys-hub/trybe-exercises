const { test, describe, expect } = require('@jest/globals');
let ranNumber = require('./aula1');

describe('RandomNumber', () => {
  test('Defina o retorno padrão 10, teste se foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    const mockRanNumber = jest
    .spyOn(ranNumber, 'randomNumber')
      .mockReturnValue(10);

    mockRanNumber();
    expect(mockRanNumber).toHaveBeenCalled();
    expect(mockRanNumber()).toBe(10);
    expect(mockRanNumber).toHaveBeenCalledTimes(2);
  });
});

describe('RandomNumber', () => {
  test('Utilize o mock, crie uma nova implementação, receba 2 parametros e retorna a divisão do primeiro pelo segundo e deve ocorrer uma unica vez', () => {
    ranNumber.randomNumber.mockClear();

    const mockRanNumber = jest
    .spyOn(ranNumber, 'randomNumber')
      .mockImplementation((a, b) => a / b);

    expect(mockRanNumber(10, 2)).toBe(5);
    expect(mockRanNumber).toHaveBeenCalledTimes(1);
  });
});