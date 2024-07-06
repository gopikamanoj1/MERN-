let array = [
  { F1: 4, P1: [1, 2, 3, 5, 5] },

  { f1: 5, p1: [5, 6, 54, 64] },

  { r1: 5, w1: [5, 6, 54, 64] },
];

function one(array) {
  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let keys = Object.keys(object);
    let fisrtKey = keys[0];

    let values = object[fisrtKey];

    let secondKey = keys[1];
    let arr = object[secondKey];

    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j] * values;
    }

    for (let i = 0; i < arr.length; i++) {
      let start = 0;
      let end = arr.length - 1;
      let count = 0;
      let n = [];

      while (start <= end) {
        if (count % 2 == 0) {
          n.push(arr[end]);
          end--;
        } else {
          n.push(arr[start]);
          start++;
        }
        count++;
      }

      object[secondKey] = n;
    }
  }

  return array;
}

console.log(one(array));
