const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parametros tem que ser numeros!');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 é igual a 0');
assert.throws(() => { sum(4, '5'); }, /^Error: Os parametros tem que ser numeros!$/); // OK
assert.strictEqual(sum(4, '5'), 9);