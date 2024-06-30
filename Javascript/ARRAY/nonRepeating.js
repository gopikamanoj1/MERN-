// non repeating elements in array

let arr=[1,2,3,4,1,5,4,7,5,3,8,4,100]


function nonRepeat(arr){
   let count={}
   let res=[]
   for(let i=0;i<arr.length;i++){
       if(count[arr[i]]){
           count[arr[i]]++
       }else{
           count[arr[i]]=1
       }
   }
   for (let i=0;i<arr.length;i++){
          if(count[arr[i]]==1){
           res.push(arr[i])
       }
   }
   
   return res
}
console.log(nonRepeat(arr))