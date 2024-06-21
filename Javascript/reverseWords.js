let str = "hello world jjj";

function reverseWords(str) {
  let word = "";
  let words = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
 
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    } else {
      word = word + str[i];
    }
  }
  if (word.length > 0) {
    words.push(word);
  }
  let reverseString = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reverseString = reverseString + words[i];
    if (i > 0) {
      reverseString = reverseString + " ";
    }
  }

  return reverseString;
}

console.log(reverseWords(str));
