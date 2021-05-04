function hiredPerson(nomeCompleto) {
  return { nomeCompleto, email: `${nomeCompleto.split(' ').join('_')}@trybe.com` };
}

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    id2: hiredPerson('Luiza Drumond'),
    id3: hiredPerson('Carla Paiva'),
  };
  return employees;
};

const persons = newEmployees();

const fiveRandomNumber = () => Math.ceil(Math.random() * 5);

function ramdomSort(num, randNum) {
  if (num === randNum) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

