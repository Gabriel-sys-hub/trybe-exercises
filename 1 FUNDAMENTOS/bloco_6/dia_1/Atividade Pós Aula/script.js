const statesContainer = document.getElementById('estados');
const container = document.getElementById('container-resume');
const btnSubmit = document.getElementById('submit');

function generateStates() {
  const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerText = states[index];
    statesContainer.appendChild(optionState);
  }
}
generateStates();

const form = document.getElementById('form');
const newForm = new FormData(form);

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  for (let index of newForm.entries()) {
    const newDivElement = document.createElement('div');
    const newDiv = document.getElementById('div');
    newDivElement.innerHTML = `${index[0]}: ${index[1]}`;
    newDiv.appendChild(newDivElement);   
  }
});
