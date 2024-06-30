// const reverseString =(str)=>{
//     if (str===''){
//         return str
//     }
//     return reverseString(str.substr(1)) + str.charAt(0)
// }
// console.log(reverseString("akshay "));


// function test(num1,num2){
//     return new Promise((res,rej)=>{
//         let sum=num1+num2
//         if(sum){
//             res(sum)
//         }else{
//             rej('error')
//         }
//     })
// }
// test(1,3).then((data)=>{
// console.log(data);
// }).catch((err)=>{
// console.log(err)
// })


let arr=['ff','oo','pp','uu','tt']

// let res=arr.slice(2,4)
let res=arr.splice(2,3,'hihi')
console.log(res);
console.log(arr);