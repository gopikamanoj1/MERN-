const arr = [3,38,35,12,41,3,4,23,45,12]

function test(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let curr=-1
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
               curr=arr[j]
            break
            }
        }
        res.push(curr)
    }
    return res
}
console.log(test(arr));