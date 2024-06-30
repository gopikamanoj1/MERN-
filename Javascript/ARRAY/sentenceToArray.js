let str ="  This is an example sentence.  ";

function sentenceToArray(str) {
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
  return words;
}

console.log(sentenceToArray(str));
