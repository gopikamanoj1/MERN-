// generator function that endlessly produces even numbers


function* printRes(){
    let  num= 0
    while(true){
        yield num
        num= num + 2
    }
}
let res=printRes()

for( let i=0;i<=10; i++){
    console.log(res.next())
}
