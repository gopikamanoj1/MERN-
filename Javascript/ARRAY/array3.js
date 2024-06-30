//  // Output: [1, 2, 3, 2, 5, 5, 56, 6, 9]
//  let arr = [1, 2, 3, 2, 2, 5, 5, 56, 6, 6, 5, 9, 9, 1];


// function lastDup(arr){
//     let test={}
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//               let curr=arr[j]
//             if(arr[i]==curr){
//                 test[arr[j]]
//                 arr.splice(j,1)
//               break
//             }
//         }
        
//     }
//     return arr
// }
// console.log(lastDup(arr))

let arr = [1, 3, 2, 2, 5, 5, 56, 6, 6, 5, 2, 9, 9, 1];

function removeLastDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) && i !== arr.lastIndexOf(arr[i])) {
      arr.splice(arr.lastIndexOf(arr[i]), 1);
    }
  }
  return arr;
}

console.log(removeLastDuplicates(arr)); // Output: [1, 2, 3, 2, 5, 5, 56, 6, 9]
