let array = [1,2,3,4,5,10,15,1,2]
function highValue() {
  let menor = array[0];
  let indice = 0;
  for(let index = 1; index < array.length; index++) {
    if (array[index] < menor) {
      menor = array[index]
      indice = index;
      }
    }
  console.log('O menor numero é ' + menor + ' e o indice desse numero é: ' + indice)
}

highValue(array)