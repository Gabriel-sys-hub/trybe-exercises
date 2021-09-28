function checkNumber(num) {
  let result = '';
  if (num > 0) result = "positivo"
  if (num < 0) result = "negativo"
  if (num === 0) result = "neutro" 
  return result;
}

module.exports = checkNumber;
