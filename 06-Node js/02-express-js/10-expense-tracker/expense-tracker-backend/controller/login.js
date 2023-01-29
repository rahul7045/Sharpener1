const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.login = async (req , res , next)=>{
    try{
    console.log(req.body)
    const email = req.body.enteredEmail
    const password = req.body.enteredPassword
    const data1 = await User.findByPk(email)

    if(data1){

        bcrypt.compare(password , data1.password , (err , result)=>{
            if(!err){
                res.status(200).json("Login Successful")
            }
            else{
                res.json("Password is Wrong")
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