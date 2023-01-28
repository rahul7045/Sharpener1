const User = require('../models/User')
exports.signup = async (req , res , next)=>{
    try{
    console.log(req.body)
    const email = req.body.enteredEmail
    const password = req.body.enteredPassword
    console.log(email , password)
    const data1 = await User.findByPk(email)
    console.log(data1)
   

    if(data1){
         res.json("User Already Available")
    }else{
        
        console.log("User added Successfully")
        const data = await User.create({email : email , password : password})
       res.status(200).json("Sign Up Successful")
    }

    }catch(error){
      console.log(error)
    }

    console.log("received signup data")
}