function isPalindrome(string) {
  let splitString = string.split('');
  let reverseString = splitString.reverse();
  let joinString = reverseString.join('');
    if(string === joinString) {
      console.log(true)
    } else {
      console.log(false)
  }
}

isPalindrome("olo")