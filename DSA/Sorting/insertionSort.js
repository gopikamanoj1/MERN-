const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let current = array[i];

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

let array = [4, 4, 5, 8, 2, 5, 7, 3];
console.log(insertionSort(array));
