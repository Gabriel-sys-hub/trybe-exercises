let bgColor;
let container = document.getElementById('container');
let span = document.getElementById('span');
let textColor = document.getElementById('textColor');
let fontSizes = document.getElementById('fontSize');
let textHeight = document.getElementById('textHeight');
let fontFamily = document.getElementById('fontStyle')
let bodyColor = document.body;

function colours() {
  if(localStorage.getItem('bgcolor') === 'black') {
    bodyColor.style.backgroundColor = 'black';
    textColoursBack()
  }
}


function coloursBack() {
  localStorage.setItem('bgcolor', container.value);
  if(localStorage.getItem('bgcolor') === 'white') {
    document.body.style.backgroundColor = 'white';
    textColours()
  }
}

function textColours() {
  localStorage.setItem('textColour', container.value);
  if(localStorage.getItem('bgcolor') === 'white') {
    span.style.color = 'black';
    localStorage.setItem('textColour', container.value)
    localStorage.setItem('bgcolor', container.value)
  }
}

function textColoursBack() {
  localStorage.setItem('textColour', container.value);
  if(localStorage.getItem('bgcolor') === 'black')  {
    span.style.color = 'lightgrey'
    localStorage.setItem('textColour', container.value);
  }
}

function textColours2() {
  if(localStorage.getItem('bgcolor') === '0')  {
    span.style.color = 'black'
  }
}

function setFontSize() {
  localStorage.setItem('fontSize', fontSizes.value);
  if(localStorage.getItem('fontSize') === '0')  {
    span.style.fontSize = '16px'
  } else if (localStorage.getItem('fontSize') === '1') {
    span.style.fontSize = '32px'
  } else if (localStorage.getItem('fontSize') === '2') {
    span.style.fontSize = '50px'
  }
}

function spaceBeteweenLine() {
  localStorage.setItem('spaceLine', textHeight.value);
  if(localStorage.getItem('spaceLine') === '0') {
    span.style.lineHeight = '2'
  } else if (localStorage.getItem('spaceLine') === '1') {
    span.style.lineHeight = '4'
  } else if (localStorage.getItem('spaceLine') === '2') {
    span.style.lineHeight = '6'
  }
}

function fontStyle() {
  localStorage.setItem('fontStyle', fontFamily.value);
  if(localStorage.getItem('fontStyle') === '0') {
    span.style.fontFamily = 'monospace'
  } else if (localStorage.getItem('fontStyle') === '1') {
    span.style.fontFamily = 'calibri'
  }
}


container.addEventListener('change', colours);
container.addEventListener('change', coloursBack);
fontSizes.addEventListener('change', setFontSize);
fontFamily.addEventListener('change', fontStyle);
textHeight.addEventListener('change', spaceBeteweenLine);
