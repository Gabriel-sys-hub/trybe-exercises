// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Laranja', 'Uva'];

const fruitSalad = (fruit, additional) => {
  const newFruitSalad = [...fruit, ...additional];
  return newFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));