// Sum of Digits: Write a function that takes a number and returns the sum of its digits.
//  For example, 123 should return 6.

let num =123

function sumofDigits(num){
    let digit;
    let sum=0
    while(num >0){
     digit= num % 10 
     num=Math.floor(num/10)
     sum=sum+digit
    }
return sum
}

console.log(sumofDigits(num));