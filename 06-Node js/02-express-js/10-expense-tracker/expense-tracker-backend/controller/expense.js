const Expense = require("../models/Expense")

exports.addExpense = async (req , res , next)=>{
    try{
    console.log(req.body)
    const amount = req.body.amount
    const description = req.body.description
    const category = req.body.category
   
    const data = await Expense.create({amount , description , category ,userId : req.user.id})
    res.status(200).json("Expense Added Successfully")
    

    }catch(error){
      console.log(error)
    }

}

exports.getExpenses = async(req , res , next)=>{
    try{
        console.log("In get Expense" , req.user.id)
        const data = await Expense.findAll({where : {userId : req.user.id}})
        console.log("Data get successfully")
        res.status(200).json({message :"Expense Added Successfully" , data : data})
        
    
        }catch(error){
          console.log(error)
        }
    
}

exports.deleteExpense= async(req , res , next)=>{
  const expenseId = req.params.expenseId
  console.log("In deleted Function")
  Expense.destroy({where : {id : expenseId}})
  .then(()=>{
    console.log("Item deleted ")
    return res.status(200).json()
  })
  .catch(err=>{
    console.log(err)
    alert("Error")
  })

}