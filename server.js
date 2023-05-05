const express=require('express')
a=0
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/test',(req,res)=>{
    res.send('test succses')
})

module.exports=app