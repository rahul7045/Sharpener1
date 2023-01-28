const User = require('../models/User')
exports.signup = async (req , res , next)=>{
    try{
        console.log(req.body)
    const email = req.body.enteredEmail
    const password = req.body.enteredPassword
    console.log(email , password)
    const data = await User.create({email : email , password : password})
    res.json(data)
    console.log("User ceated")
    
    }catch(error){
      console.log(error)
    }

    console.log("received signup data")
    return res.json
}