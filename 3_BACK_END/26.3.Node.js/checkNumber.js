function checkNumber(num) {
  let result = '';
  if (num > 0) result = "positivo"
  if (num < 0) result = "negativo"
  if (num === 0) result = "neutro" 
  if (typeof num !== 'number') result = "O valor informado não é um numero!"
  console.log(result);
  return result;
}

checkNumber(1);

module.exports = checkNumber;
