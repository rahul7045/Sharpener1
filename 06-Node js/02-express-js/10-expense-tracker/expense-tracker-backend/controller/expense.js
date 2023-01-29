const Expense = require("../models/Expense")

exports.addExpense = async (req , res , next)=>{
    try{
    console.log(req.body)
    const amount = req.body.amount
    const description = req.body.description
    const category = req.body.category
   
    const data = await Expense.create({amount , description , category})
    res.status(200).json("Expense Added Successfully")
    

    }catch(error){
      console.log(error)
    }

}

exports.getExpenses = async(req , res , next)=>{
    try{
       
        const data = await Expense.findAll()
        console.log(data)
        res.status(200).json({message :"Expense Added Successfully" , data : data})
        
    
        }catch(error){
          console.log(error)
        }
    
}

exports.deleteExpense= async(req , res , next)=>{
  const expenseId = req.params.expenseId
  Expense.destroy({where : {id : expenseId}})
  .then(()=>{
    res.status(200).json()
  })
  .catch(err=>{
    console.log(err)
    alert("Error")
  })

}