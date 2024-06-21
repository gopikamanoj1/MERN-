const reverseString =(str)=>{
    if (str===''){
        return str
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString("akshay "));