const express = require('express')

const router = express.Router();

router.get('/',(req , res , next)=>{
    console.log("In the next Middleware")
   res.send('<h1>Hello world from Main Page</h1>')
   next()
})

module.exports = router