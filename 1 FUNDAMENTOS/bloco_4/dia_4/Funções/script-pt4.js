let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

var arrayLength = 0;
var longestArrayLength;

function biggestName() {
  for (let index = 0; index < array.length; index++) {
    if (array[index].length > arrayLength) {
      arrayLength = array[index].length;
      longestArrayLength = array[index];
      }
     }
    console.log(arrayLength)
  console.log(longestArrayLength)
}
biggestName(array)