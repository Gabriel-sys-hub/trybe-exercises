const jokeContainer = document.getElementById('jokeContainer');
// apiScript.js 

const fetchJoke = (param) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const API_URL = `https://v2.jokeapi.dev/joke/${param}`;
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const newJoke = data.joke;
      jokeContainer.innerText = newJoke;
    });
};


const newJokes = async () => {
  fetchJoke('coding')
}

newJokes();

const newPromise = new Promise((resolve, reject) => {
  const newArray = [];
  const max = 50;
  const min = 1;
  for (let index = 0; index < 10; index += 1) {
    newArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  const lastArray = [];
  newArray.forEach((number) => {
    lastArray.push(number*number);
  });
  const result = lastArray.reduce((accumulator, index) => accumulator + index);
  if (result > 8000) {
    reject(console.log(`${result}`))
  }
  resolve(console.log(`${result}`))
}).then((number) => console.log(number))
.then(mensage => console.log(mensage))
.catch(number => console.log(`Azar o seu, seu inimigo tem mais de ${number} de poder!`));
