const arr = [1, 2, 3, 4, 5, 6, 7];

function rotate(arr, k) {
    // Reverse the first k elements
    let left = 0;
    let right = k - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(rotate(arr, 3)); 
// Expected output: [3, 2, 1, 4, 5, 6, 7]
