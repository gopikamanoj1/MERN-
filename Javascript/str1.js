// Capitalize Words:
// "hello world" should become "Hello World".

let str='hello world'
function capitalizeWords(str){
    let words=[]
    let word=''
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            if(word.length > 0){
                words.push(word)
                word=''
            }
        }else{
            word=word+str[i]
        }
    }
    if(word.length>0){
        words.push(word)
    }
    let capitalizeWords=''
        for( let i=0;i<words.length;i++){
            let word=words[i]
            capitalizeWords +=word[0].toUpperCase()+ word.substring(1)
            if(i < words.length-1){
                capitalizeWords=capitalizeWords+' '
            }
        }
return capitalizeWords
}
console.log(capitalizeWords(str));