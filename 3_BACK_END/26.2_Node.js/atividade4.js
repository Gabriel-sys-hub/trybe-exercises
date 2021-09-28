const fs = require('fs').promises;

// fs.readFile('./simpson.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
// .then((strings) => {
//   strings.forEach((string) => console.log(string));
// });

async function createSimpsonsFamily() {
  const simpsonFamily = await fs.readFile('./simpson.json', 'utf8');
  const resultFromSimpson = await JSON.parse(simpsonFamily);
  const result = await resultFromSimpson.map(({ id, name }) => `${id} - ${name}`);
  const stringResult = result.forEach(string => console.log(string))
  console.log(stringResult)
  return stringResult;
}


createSimpsonsFamily();