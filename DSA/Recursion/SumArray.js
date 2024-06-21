let array=[2,2,3]
const sum =(array)=>{
    if (array.length===0){
        return 0
    }
    return array[0] + sum ( array.slice (1))
}

console.log(sum(array));