// function pattern(n,i=n,j=1,output=""){
//     if(j>n){
//         console.log(output);
//         return pattern(n,i-1);
//     }
//     if(i<1){
//         return;
//     }
//     if(j<i){
//         output+="  ";
//     }else{
//         output+=j+" "
//     }
//     return pattern(n,i,j+1,output);
// }

// pattern(10)












function pattern(n) {
    for (let i = n; i > 0; i--) {
        let output = "";
        for (let j = 1; j <= n; j++) {
            if (j < i) {
                output += "  ";
            } else {
                output += j + " ";
            }
        }
        console.log(output);
    }
}

pattern(10);
