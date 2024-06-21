const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor(array.length / 2);

  while (left <= right) {
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 9));
