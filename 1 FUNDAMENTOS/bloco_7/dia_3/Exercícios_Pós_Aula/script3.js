const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], '[1, 2, 3, 4]');
// assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Não é para retornar o array [1, 2, 3, 4]')
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 5));
assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'É para retornar [1, 2, 3, 4]');