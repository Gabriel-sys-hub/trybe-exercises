const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const verifyPair = (obj, key, value) => {

  const entries = Object.entries(obj);
  let bool = false;

  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      bool = true;
    } 
  }

  return bool;
}


console.log(verifyPair(lesson3, 'turno', 'noite'));