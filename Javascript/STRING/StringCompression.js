// Input: "aabcccccaaa"

// Expected Output: "a2b1c5a3"


let str='aabcccccaaa'

function StringCompression(str){
    let test=''
    let count=1
    for(let i=0;i<str.length;i++){

        if(str[i]==str[i+1]){
            count ++   
      
        }else{
            test += str[i]+count
            count=1
        }
    }
   return test

}
console.log(StringCompression(str));