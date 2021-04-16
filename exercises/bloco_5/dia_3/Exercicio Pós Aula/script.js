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
let listOfLi = document.createElement('li');

for(let index = 0; index < 33; index += 1) {
  listOfLi = document.createElement('li');
  uList.appendChild(listOfLi)
  listOfLi.classList.add('day');
  listOfLi.innerHTML = dezDaysList[index]
  if(dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    listOfLi.classList.add('holiday')
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    listOfLi.classList.add('friday')
  } else if (dezDaysList[index] === 25) {
    listOfLi.classList.add('friday', 'holiday')
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
}

function changeColors() {
  listOfEveryHoliday.forEach((section) => {
    section.style.color = 'red';
  })
}

function removeColors() {
  listOfEveryHoliday.forEach((section) => {
    section.style.color = 'grey'
  })
}


buttom.addEventListener('click', changeColors);
buttom.addEventListener('dblclick', removeColors)
holiday();


function friday() {
  buttomFriday.setAttribute('id', 'btn-friday');
  buttomFriday.innerHTML = 'Sexta-Feira'
  buttonsContainer.appendChild(buttomFriday);
}


function changeText() {
  listOfEveryFriday.forEach((section) => {
    section.innerText = 'XABLAAAAU'
  })
}

function changeBack() {
  listOfEveryFriday.forEach((section) => {
    section.innerText = parseInt(section.nextElementSibling.innerText) - 1;
  })
}
console.log(listOfEveryFriday)

buttomFriday.addEventListener('click', changeText )
buttomFriday.addEventListener('dblclick', changeBack)


friday();

let listOfLisArray = document.querySelectorAll('.day');

function zoom() {
  for(let index = 0; index < 33; index += 1) {
    listOfLisArray[index].classList.add('zoom');
   }
}

function activeTab(index) {
  listOfLisArray.forEach((section) => {
    section.classList.remove('zoom');
  })
  listOfLisArray[index].classList.add('zoom');
}

function desativeTab(index) {
    listOfLisArray[index].classList.remove('zoom')
}

listOfLisArray.forEach((itemMenu, index) => {
  itemMenu.addEventListener('mouseout', () => {
    desativeTab(index)
  })
})

listOfLisArray.forEach((itemMenu, index) => {
  itemMenu.addEventListener('mouseover', () => {
    activeTab(index);
  })
})

let myTasks = document.querySelector('.my-tasks');
let addButton = document.querySelector('#btn-add');

function tasks() {
  let span = document.createElement('span');
  let li = document.createElement('li');
  
  li.appendChild(span);
  let inputValue = document.getElementById('task-input').value;
  let text = document.createTextNode(`\n${inputValue}`);
  span.appendChild(text);
  if (inputValue === '') {
    alert('You must write something!')
  }
  myTasks.appendChild(span)
  document.getElementById('task-input').value = ''
}
let newDivColor = document.createElement('div');

function taskColor() {
  newDivColor = document.createElement('div');
  let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}` 
  newDivColor.style.backgroundColor = randomColor
  myTasks.appendChild(newDivColor)
  newDivColor.classList.add('task')
}

addButton.addEventListener('click', tasks)
addButton.addEventListener('click', taskColor)

let myTask = document.querySelectorAll('.my-tasks')

newDivColor.addEventListener('click', (event) => {
  if(event.target.classList('task')) {
    event.target.classList.add('selected')
  }
})

