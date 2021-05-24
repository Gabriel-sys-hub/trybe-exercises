const statesContainer = document.getElementById('estados');
const container = document.getElementById('container-resume');
const btnSubmit = document.getElementById('submit');
const email = document.getElementById('email');

function generateStates() {
  const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerText = states[index];
    statesContainer.appendChild(optionState);
  }
}
generateStates();

validation.init('#form');
validation.isValid('#form')
validation.show(email, 'message');