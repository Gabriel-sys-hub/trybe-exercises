const fs = require('fs');

function createAFile(type, content) {
  fs.writeFile(type, content, () => {
    console.log('Arquivo criado com sucesso!')
  });
  return "Ok!";
} 

module.exports = createAFile;