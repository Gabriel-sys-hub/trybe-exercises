const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
myRemove([1, 2, 3, 4], 3);
// implemente seus testes aqui

const expected = myRemove([1, 2, 3, 4], 3);

assert.strictEqual(expected, 3,  'Não retorna o array esperado!');
assert.strictEqual(expected, [1, 2, 3, 4], 'Não retorna o array correto [1, 2, 3, 4]');
assert.strictEqual(myRemove([1, 2, 3, 4], 5), '?')
