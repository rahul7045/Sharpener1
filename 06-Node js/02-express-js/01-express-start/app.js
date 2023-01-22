const http = require('http')

const express = require('express')


const app =express()

app.use((req , res , next)=>{
    console.log("In the middleware")
    next();
})

app.use((req , res , next)=>{
    console.log("In the next Middleware")
        res.send({key1:"Rahul"})

   // res.send('<h1>Hello world from Rahul</h1>')
})


app.listen(3000)