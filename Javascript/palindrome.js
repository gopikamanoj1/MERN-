let str='lol'

function isPalindrome(str){
    if( str[0]!== str[str.length-1]){
        return false
    }
    let start = 0
    let end = str.length-1
    while(start < end){
        if( str[start] !== str[end]){
            return false
        }
        start++
        end--
    }

    return true
}
console.log(isPalindrome(str))