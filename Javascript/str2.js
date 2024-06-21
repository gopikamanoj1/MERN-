// Count Character Frequency


let str='hello'

function characterFrequency(str){
    let res={}
    for(let i=0;i<str.length;i++){
        if(!res[str[i]]){
            res[str[i]]=1
        }else{
            res[str[i]]++
        }
    }
    return res
}
console.log(characterFrequency(str));