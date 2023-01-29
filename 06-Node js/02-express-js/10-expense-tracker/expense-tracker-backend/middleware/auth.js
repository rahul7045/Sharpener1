const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.authenticate = (req , res , next)=>{
   try{
    const token = req.header('Authorization')
    console.log(token)
    const user = jwt.verify(token , "secretkey")
    console.log("user>>>>>>>>" , user.userId)
    User.findByPk(user.userId).then((user)=>{
        req.user = user
        console.log("In middleware re.user" , req.user.id)
        next()
    })
   }catch(err){
    console.log(err)
   }
}