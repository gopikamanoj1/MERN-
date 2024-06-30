//print combinations of two numbers that can add up to 8 in array

let array = [1, 2, 3, 4, 9, 2, 4, 7, 3, 7, 1, 4, 6];

function numbers(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 8) {
        let pair = [arr[i], arr[j]].sort((a, b) => a - b);
        let isDup = false;
        for (let k = 0; k < newArray.length; k++) {
          if (newArray[k][0] == pair[0] && newArray[k][1] == pair[1]) {
            isDup = true;
          }
        }
        if (!isDup) {
          newArray.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return newArray;
}
console.log(numbers(array));
