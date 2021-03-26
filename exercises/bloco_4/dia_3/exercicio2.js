let n = 5

for (let index = 0; index < n; index++) {
  if (index === 0) {
    console.log("*")
  } else if (index === 1) {
    console.log("**")
  } else if (index === 2) {
    console.log("***")
  } else if (index === 3) {
    console.log("****")
  } else {
    console.log("*****")
  }
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