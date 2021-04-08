let bgColor;

window.onload = function theme() {
  document.body.style.backgroundColor = 'white';
  localStorage.setItem('bgcolour', 1);
}

let container = document.getElementById('container');
function colours() {
  localStorage.setItem('bgcolor', container.value);
  if(localStorage.getItem('bgcolor') === '1') {
    document.body.style.backgroundColor = 'black';
    textColours()
  }
}

window.onload = function textColorTheme() {
  document.body.style.color = 'black';
  localStorage.setItem('textColour', 1)
}

let span = document.getElementById('span');

let textColor = document.getElementById('textColor');

function textColours() {
  if(localStorage.getItem('bgcolor') === '1')  {
    span.style.color = 'lightgrey'
  }
}

function coloursBack() {
  localStorage.setItem('bgcolor', container.value);
  if(localStorage.getItem('bgcolor') === '0') {
    document.body.style.backgroundColor = 'white';
    textColours2()
  }
}

window.onload = function textColorTheme() {
  document.body.style.color = 'black';
  localStorage.setItem('textColour', 0)
}

function textColours2() {
  if(localStorage.getItem('bgcolor') === '0')  {
    span.style.color = 'black'
  }
}

container.addEventListener('change', colours)
container.addEventListener('change', coloursBack)

let fontSizes = document.getElementById('fontSize');

function fontSize() {
  localStorage.setItem('fontSize', fontSizes.value);
  if(localStorage.getItem('fontSize') === '0')  {
    span.style.fontSize = '16px'
  } else if (localStorage.getItem('fontSize') === '1') {
    span.style.fontSize = '32px'
  } else if (localStorage.getItem('fontSize') === '2') {
    span.style.fontSize = '50px'
  }
}

fontSizes.addEventListener('change', fontSize)

let textHeight = document.getElementById('textHeight');

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

textHeight.addEventListener('change', spaceBeteweenLine)

let fontFamily = document.getElementById('fontStyle')

function fontStyle() {
  localStorage.setItem('fontStyle', fontFamily.value);
  if(localStorage.getItem('fontStyle') === '0') {
    span.style.fontFamily = 'monospace'
  } else if (localStorage.getItem('fontStyle') === '1') {
    span.style.fontFamily = 'calibri'
  }
}

fontFamily.addEventListener('change', fontStyle)




