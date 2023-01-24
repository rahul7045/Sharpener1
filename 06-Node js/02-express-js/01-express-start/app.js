const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')


const app =express()

app.use(bodyParser.urlencoded({extended : false}))

app.use('/add-product',(req , res , next)=>{
  console.log("In add products")
  res.send('<form action="/products" method="POST"><input type="text" name="title" /><button type="submit">Add </button></form>')
})

app.post('/products',(req , res , next)=>{
    console.log(req.body)
    console.log("In the Products")
    res.redirect('/')
  //  res.send('<h1>Product Page</h1>')
   // next();
})

app.use('/',(req , res , next)=>{
    console.log("In the next Middleware")
   res.send('<h1>Hello world from Main Page</h1>')
   next()
})


app.listen(3000)