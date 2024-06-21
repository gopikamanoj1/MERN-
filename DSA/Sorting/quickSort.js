function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
      const pivot = array[0];
      const left = [];
    const right = [];
      for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
      return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
  const sortedArray = quickSort(unsortedArray);
  
  console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
  