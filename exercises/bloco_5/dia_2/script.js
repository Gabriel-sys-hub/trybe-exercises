let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);
console.log(elementoOndeVoceEsta.parentElement.style.color = 'green');
console.log(elementoOndeVoceEsta.firstElementChild.innerHTML = 'Hello world');
console.log(document.querySelector('#pai').firstElementChild);
console.log(elementoOndeVoceEsta.previousElementSibling);
console.log(elementoOndeVoceEsta.parentElement.innerText);
console.log(elementoOndeVoceEsta.nextElementSibling)
console.log(document.querySelector('#pai').children[2]);

let newDiv = document.createElement('div');
console.log(elementoOndeVoceEsta.appendChild('div'))
let newChildForFilho = document.appendChild(elementoOndeVoceEsta.firstElementChild)

newChildForFilho.nextElementSibling;