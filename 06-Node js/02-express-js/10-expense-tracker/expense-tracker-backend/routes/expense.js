const express = require('express')
const router = express.Router()

const expenseController = require('../controller/expense')

router.post('/addForm',expenseController.addExpense)

router.get('/getExpense',expenseController.getExpenses)

 router.delete('/delete-product/:expenseId' , expenseController.deleteExpense)


module.exports = router