
exports.login = (req , res , next)=>{
    console.log(req.body)
    console.log("received login data")
    return res.json()
}