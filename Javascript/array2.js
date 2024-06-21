// Sum of Range: Write a function that takes two numbers and returns the sum of all numbers between them, inclusive.
//  For example, sumRange(1, 5) should return 15 (1 + 2 + 3 + 4 + 5).


function sumRange(num1,num2){
    let sum=0
    for(let i=num1;i<=num2;i++){
        sum=sum+i
    }
    return sum
}
console.log(sumRange(1,5));