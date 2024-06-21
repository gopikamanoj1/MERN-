// Longest Substring Without Repeating Characters
// Write a function that finds the length of the longest substring without repeating characters in a given string

let str='abcabcbbd'

function longestSubstring(str){
    let test={}
    for(let i=0;i<str.length;i++){
       if(!test[str[i]]){
        test[str[i]]=1
       }else{
        test[str[i]]++
       }
       
    }
    return Object.keys(test).join('')
}

console.log(longestSubstring(str));