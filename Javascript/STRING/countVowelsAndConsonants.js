let str = "hello world";

function countVowelsAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let vCount = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vCount++;
    } else if (str[i].match(/[a-z]/i)) {
      count++;
    }
  }
  return [vCount, count];
}

console.log(countVowelsAndConsonants(str));
