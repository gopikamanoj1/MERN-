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

// function partition(arr, lb, ub) {
//   //initilise the pivote as first value
//   let pivot = arr[lb];
//   //initialice the start as lower bond
//   let start = lb;
//   //initialise the end as upper boud
//   let end = ub;

//   //the loops end when the start lesser the the end
//   while (start < end) {
//     //check the start is lessthan or equal to pivot
//     //the start stop only if the arr[start ] is greterthan pivot
//     while (arr[start] <= pivot) {
//       //if its less that we need to iterate
//       start++;
//     }
//     //chek the arr[end ] is greter that pivote
//     while (arr[end] > pivot) {
//       //if less that we need to iterate
//       end--;
//     }

//     // if the start and end is stop we need to swap that
//     if (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//     }
//   }
//   //if the start gerter that end we need t swap the pivrt with arr[end]
//   let temp = arr[lb];
//   arr[lb] = arr[end];
//   arr[end] = temp;

//   return end;
// }

// let arr = [3, 1, 5, 2, 6, 7, 3, 2, 9, 0, 2, 4, 33];
// function quicksort(arr, lb, ub) {
//   if (lb < ub) {
//     //we get the correct possitin of the pivort
//     let possition = partition(arr, lb, ub);

//     //call the quicosrt for that 2 array in a recursive manned
//     quicksort(arr, lb, possition - 1);
//     quicksort(arr, possition + 1, ub);
//   }
//   return arr;
// }

// console.log(quicksort(arr, 0, arr.length - 1));
