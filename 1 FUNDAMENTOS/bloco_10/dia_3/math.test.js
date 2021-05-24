const { expect, test, describe } = require('@jest/globals');
const math = require('./math');
jest.mock("./math");

describe('Teste se a função subtrair é chamada', () => {
  test('#subtrair', () => {
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

describe('Teste se a função multiplicar é chamada e com o valor padrão 10', () => {
  test('#multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue('10');
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe('10');
  });
});

test('#somar', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar();
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(1, 10)).toBe(11);
});

test('#dividir', () => {
  math.dividir
  .mockReturnValue(15)
    .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

  expect(math.dividir()).toBe(2);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveReturnedTimes(3);
});

describe('Faça um mock da função subtrair de maneira que seja possível restaurar o original', () => {
  test('#subtrair', () => {

    math.subtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);

    expect(math.subtrair()).toBe(20);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(2);

    math.subtrair.mockRestore();
    math.subtrair();

    expect(math.subtrair).toHaveBeenCalled();
  });
});