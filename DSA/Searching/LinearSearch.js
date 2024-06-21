const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
const array = [3, 5, 6, 8, 2, 6, 4];
console.log(linearSearch(array, 8));




