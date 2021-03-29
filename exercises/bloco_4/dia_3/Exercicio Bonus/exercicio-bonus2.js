
let arrayIsPrime = [];
let isNotPrime = [];
function isPrime(num) {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var i = 0; i < num.length; i++)
    if (num[i] % 2 !== 0) {
      arrayIsPrime.push(num[i] + " é primo," + "\n")
    } else {
      isNotPrime.push(num[i] + " não é primo")
    }
    console.log(isNotPrime)
    console.log(arrayIsPrime)
}

isPrime(1);