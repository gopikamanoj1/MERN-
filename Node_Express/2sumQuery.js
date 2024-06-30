const http=require('http')
const express=require('express')
const fs = require('fs')
const app=express()
const port=8080

const sumNum=((req,res,next)=>{
    const {num1,num2}=req.query
    if(num1 && num2 ){
        req.query.num1=parseFloat(num1) * 2
        req.query.num2=parseFloat(num2) * 2
    }
    next()
})

app.get('/',sumNum,(req,res)=>{
   res.send("this is home");
const {num1,num2}=req.query
if(num1 && num2){
    const sum=num1+num2
    fs.writeFile('sum.txt' , `sum is : ${sum}` , ()=>{
        console.log("created");
    })
}

   
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log("kk");
  console.log(`Server connected on http://localhost:${port}`);
});

