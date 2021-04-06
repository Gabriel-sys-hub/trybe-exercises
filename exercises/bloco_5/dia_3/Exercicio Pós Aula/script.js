function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const uList = document.querySelector('#days');
const buttonsContainer = document.querySelector('.buttons-container');

for(let index = 0; index < 33; index += 1) {
  let listOfLi = document.createElement('li');
  uList.appendChild(listOfLi)
  listOfLi.classList.add('day');
  listOfLi.innerHTML = dezDaysList[index]
  if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    listOfLi.classList.add('holiday')
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    listOfLi.classList.add('friday')
  }
}

let buttom = document.createElement('BUTTON');
let buttomFriday = document.createElement('BUTTON');
let listOfEveryHoliday = document.querySelectorAll('.holiday');
let listOfEveryFriday = document.querySelectorAll('.friday')
console.log(listOfEveryHoliday)

function holiday() {
  buttom.setAttribute('id', 'btn-holiday')
  buttom.innerHTML = 'Feriados'
  buttonsContainer.appendChild(buttom)
  changeColors()
}

function changeColors() {
 for(let index = 0; index < listOfEveryHoliday.length; index += 1) {
  listOfEveryHoliday[index].style.backgroundColor = 'darkred'
 }
}


buttom.addEventListener('click', holiday);

holiday()

function friday() {
  buttomFriday.setAttribute('id', 'btn-friday');
  buttomFriday.innerHTML = 'Sexta-Feira'
  buttonsContainer.appendChild(buttomFriday);
}

friday();