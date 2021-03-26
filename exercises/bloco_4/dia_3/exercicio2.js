let n = 5;
  for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n - i);
    let str2 = '*'.repeat(i * 2 - i)
    console.log(str2 + str);
}




// function makePiramide(length) {

//   var line = "";
//   for (var index = 1; index <= length; index++) {

//     for (var secondIndex = 1; secondIndex <= index; secondIndex++) {

//       line += "*";
//     }

//     line += "\n";
//   }

//   return line + "\n";
// }
// console.log(makePiramide(5));