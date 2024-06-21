function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the remaining unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) { 
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
let array = [64, 25, 12, 22, 11];
console.log("Original array:", array);
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
