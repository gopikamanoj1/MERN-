const express=require('express')
const app=express()
// console.log(app,"oo");

app.get('/',(req,res)=>{
    res.send('This is home page ')
})