const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateWebToken(id , email){
    return jwt.sign({userId : id , email : email} ,  "secretkey")
}

exports.login = async (req , res , next)=>{
    try{
    console.log(req.body)
    const email = req.body.enteredEmail
    const password = req.body.enteredPassword
    const data1 = await User.findAll({where : {email}})
    console.log("data length",data1.length)
    if(data1.length >0){
    console.log(data1[0].id)
        bcrypt.compare(password , data1[0].password , (err , result)=>{
            console.log("result bcyrpt",result)
            if(result){
                res.status(200).json({message : "Login Successful" , token : generateWebToken(data1[0].id , data1[0].email)})
            }
            else{
                res.status(401).json("Password is Wrong")
            }
        })
        // if(data1.password == password){
        //     console.log("User Available")
        //     res.status(200).json("Login Successful")
        // }else{
        //     console.log("User Password is wrong ")
        // }
    }else{
        res.json("User Not Found")

   console.log("User not Found")
    }

    console.log("received login data")
    }catch(error){
        console.log(error)
    }
}