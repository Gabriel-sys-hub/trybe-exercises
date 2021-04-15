const statesContainer = document.getElementById('estados');
const initialJobDate = document.getElementById('data');
const initialJobMonth = document.getElementById('mes');
const initialJobYear = document.getElementById('ano');

initialJobDate.addEventListener('change', () => {
  if (initialJobDate.value > 0 && initialJobDate.value <= 31) {
    initialJobDate.value;
    console.log(initialJobDate.value);
  } else {
    alert('Data incorreta!');
    initialJobDate.value = 1;
  }
});

initialJobMonth.addEventListener('change', () => {
  if (initialJobMonth.value > 0 && initialJobMonth.value <= 12) {
    initialJobMonth.value;
  } else {
    alert('Mês incorreta!');
    initialJobMonth.value = 1;
  }
});

initialJobYear.addEventListener('change', () => {
  if (initialJobYear.value > 0) {
    initialJobMonth.value
  } else {
    alert('Ano incorreta!');
    initialJobMonth.value = 1;
  }
});

function generateStates() {
  const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerText = states[index];
    statesContainer.appendChild(optionState);
  }
}
generateStates();
const submiteBtn = document.getElementById('submit');
const saveData = document.getElementsByTagName('form');
console.log(saveData)

submiteBtn.addEventListener('click', () => {
  const savedData = localStorage.setItem('key', saveData.innerText);
});

function divWithForm() {
  const newDivSection = document.createElement('div');
  const loadData = localStorage.getItem('key');
  body.appendChild(newDivSection);
  newDivSection.appendChild(loadData);
}