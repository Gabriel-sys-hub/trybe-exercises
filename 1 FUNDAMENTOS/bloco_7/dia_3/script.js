const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4);

assert.strictEqual(expected, 9, '5 + 4 = 9');

function add(a, b) {
  return a + b;
}

const expected2 = add(1, 2);

assert.ok(expected2 === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected2, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected2, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK