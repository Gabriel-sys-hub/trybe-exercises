var number = 15;

if (number > 0 && number % 2 === 1) {
  for (let i = 1; i <= number; i += 2) {
    var outterSpaces = (number - i) / 2;
    var innerSpaces = i - 2;

    i !== number
    if (i !== 1) {
      console.log(' '.repeat(outterSpaces) + '*' + ' '.repeat(innerSpaces) + '*')
    } else if (i < number) {
      console.log(' '.repeat(outterSpaces) + '*')
     } else if (i !== number ) {
      console.log('*'.repeat(i));
    } else {
      console.log('Invalid Number')
    }
  }
}