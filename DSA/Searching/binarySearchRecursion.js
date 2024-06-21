const binarySearchRecursion = (array,target, left=0, right = array.length-1)=>{
    mid = Math.floor((left+right)/2)
    if (left > right){
        return -1
    }
    if (array[mid]==target ){
        return mid
    }
    if ( array[mid]< target){
        return ( array, target, mid + 1, right )
    }
    if ( array[mid]> target){
        return ( array , target, left, mid -1)
    }
}


let array = [1,2,3,4,5,6,7]
let target= 7
console.log(binarySearchRecursion(array, target));