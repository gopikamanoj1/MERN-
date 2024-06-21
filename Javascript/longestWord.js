//  longest word ("The quick brown fox jumps over the lazy gigantic dog")


let str="The quick brown fox jumps over the lazy gigantic dog"

function print(str){
    let count =0
    let max=-Infinity
    let longestWord = '';
    let currentWord = '';
    
    for ( let i=0;i<str.length;i++){
        if(str[i]!==' '){
            count++
            currentWord += str[i];
        }
        else{   
        if (count > max) {
                max = count;
                longestWord = currentWord;
            }
       
        count = 0;
        currentWord = '';
        }
          
        
    }
    return longestWord
}
console.log(print(str))
