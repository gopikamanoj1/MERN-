
function heapSort(arr){
    const n=arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0);
    } 
    return arr;
}   
function heapify(arr,n,i){
    let largest=i;
    let left=i*2+1;
    let right=i*2+2;
    if(left<n && arr[left]>arr[largest]){
        largest=left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }
    if(largest!=i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr,n,largest);
    }
    
}
const arr=[30,7,3,20,9,15];
console.log(heapSort(arr))








// function heapSort(arr) {
//     const n = arr.length;

//     // Build a min-heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements from heap one by one
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
//         heapify(arr, i, 0); // Call min-heapify on the reduced heap
//     }

//     return arr;
// }

// function heapify(arr, n, i) {
//     let smallest = i; // Initialize smallest as root
//     let left = 2 * i + 1; // Left child
//     let right = 2 * i + 2; // Right child

//     // If left child is smaller than root
//     if (left < n && arr[left] < arr[smallest]) {
//         smallest = left;
//     }

//     // If right child is smaller than smallest so far
//     if (right < n && arr[right] < arr[smallest]) {
//         smallest = right;
//     }

//     // If smallest is not root
//     if (smallest !== i) {
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap
//         heapify(arr, n, smallest); // Recursively heapify the affected sub-tree
//     }
// }

// const arr = [30, 7, 3, 20, 9, 15];
// console.log(heapSort(arr));
