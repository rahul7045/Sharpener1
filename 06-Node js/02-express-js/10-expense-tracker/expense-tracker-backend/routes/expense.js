const express = require('express')
const router = express.Router()

const expenseController = require('../controller/expense')
const userauthenticate = require('../middleware/auth')

router.post('/addForm',userauthenticate.authenticate,expenseController.addExpense)

router.get('/getExpense',userauthenticate.authenticate,expenseController.getExpenses)

 router.delete('/delete-product/:expenseId' ,expenseController.deleteExpense)


module.exports = router