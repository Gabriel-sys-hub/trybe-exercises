function changeColor () {
  let greenHeader = document.getElementById('header-container');
  greenHeader.style.backgroundColor = 'green';
  let pinkHeader = document.getElementsByTagName('div');
  for (let index = 0; index < 4; index += 1) {
  pinkHeader[index].style.backgroundColor = 'pink';
  }
  let footer = document.getElementById('footer-container').style.backgroundColor = 'green';
}
changeColor();