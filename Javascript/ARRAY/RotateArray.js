// Rotate an Array
// Expected Output: [5, 6, 7, 1, 2, 3, 4]

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotate(arr,k){
   for (let i=0;i<arr.length;i++){
    if (i <=k){
        arr.push(arr.shift())
        console.log(arr[i]);
    }
   }
   return arr
}
console.log(rotate(arr,k))
