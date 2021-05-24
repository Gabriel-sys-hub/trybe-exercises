// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let techListArray = [];
  let sortedTechNames = array.sort();

  for (let techName of sortedTechNames) {
    techListArray.push({
      tech: techName,
      name: name,
    });
  }
  return techListArray;
}

console.log(techList([]));
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11

function lessThanThreeRepsSecond(index, array) {
  let lessThanThree = true;
  let counterOfRep = 0;
  for (let index2 = 1; index2 < array.length; index2 += 1) {
    if (array[index] === array[index2]) {
      counterOfRep += 1;
    }
  }
  if (counterOfRep > 2) {
    lessThanThree = false;
  }
  return lessThanThree;
}
function lessThanThreeReps(array) {
  let lessThanThree = true;
  for (let index = 0; index < array.length; index += 1) {
    lessThanThree = lessThanThreeRepsSecond(index, array);
    if (lessThanThree === false) {
      break;
    }
  }
  return lessThanThree;
}
function betweenZeroNine(array) {
  let zeroAndNine = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      zeroAndNine = false;
    }
  }
  return zeroAndNine;
}
function withElevenNumbers(array) {
  let phoneNumber = ['(', 0, 0, ') ', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0];
  let difOfIndex = 1;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2 || index === 7) {
      difOfIndex += 1;
      phoneNumber[index + difOfIndex] = array[index];
    } else {
      phoneNumber[index + difOfIndex] = array[index];
    }
  }
  return phoneNumber.join('');
}
function generatePhoneNumber(array) {
  let phoneNumber = [];
  if (array.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (betweenZeroNine(array) !== true || lessThanThreeReps(array) !== true) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = withElevenNumbers(array);
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }

  if (lineA >= lineB + lineC) {
    return false;
  }

  if (lineB >= lineA + lineC) {
    return false;
  }

  if (lineC >= lineA + lineB) {
    return false;
  }

  return true;
}

console.log(triangleCheck(10, 2, 9));

// Desafio 13
function hydrate(string) {
  let countWaterCoups = string.match(/\d+/g); //regex pra pegar apenas numeros na variavel, pode ser ^[0-9]*$

  countWaterCoups = countWaterCoups.map((count) => parseInt(count, 10));

  let totalCount = countWaterCoups.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  if (totalCount === 1) {
    return '1 copo de água';
  }

  totalCount += ' copos de água';
  return totalCount;
}

function encode(string) {
  let encodedMessage = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index].toLowerCase() === string[index]) {
      switch (string[index]) {
      case 'a':
        encodedMessage += '1';
        break;
      case 'e':
        encodedMessage += '2';
        break;
      case 'i':
        encodedMessage += '3';
        break;
      case 'o':
        encodedMessage += '4';
        break;
      case 'u':
        encodedMessage += '5';
        break;
      default:
        encodedMessage += string[index];
      }
    } else {
      encodedMessage += string[index];
    }
  }
  return encodedMessage;
}

function decode(number) {
  let decodedMessage = '';

  for (let index = 0; index < number.length; index += 1) {
    switch (number[index]) {
    case '1':
      decodedMessage += 'a';
      break;
    case '2':
      decodedMessage += 'e';
      break;
    case '3':
      decodedMessage += 'i';
      break;
    case '4':
      decodedMessage += 'o';
      break;
    case '5':
      decodedMessage += 'u';
      break;
    default:
      decodedMessage += number[index];
    }
  }
  return decodedMessage;
}

module.exports = {
  techList,
  hydrate,
  decode,
  encode,
};
