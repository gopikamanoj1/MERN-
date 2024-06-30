
let arr = [3, 1, 5, 2, 6, 7, 3, 2, 9, 0, 2, 4, 33];
function quicksort(arr, lb, ub) {
  if (lb < ub) {
    let possition = partition(arr, lb, ub);
    quicksort(arr, lb, possition - 1);
    quicksort(arr, possition + 1, ub);
  }
  return arr;
}
  
function partition(arr, lb, ub) {
  let pivot = arr[lb];
  let start = lb;
  let end = ub;
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  let temp = arr[lb];
  arr[lb] = arr[end];
  arr[end] = temp;

  return end;
}



console.log(quicksort(arr, 0, arr.length - 1));
