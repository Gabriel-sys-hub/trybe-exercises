function trueOrFalse (stringWord, stringEnding) {
  for(let index = 0; index < stringWord.length; index ++) {
    if(stringWord.includes(stringEnding)) {
      return true
    } else {
      return false
    }  
  }
}

console.log(trueOrFalse('Gabriel', 'riel'))