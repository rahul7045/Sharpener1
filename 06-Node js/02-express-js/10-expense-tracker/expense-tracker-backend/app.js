const express = require('express')
const sequelize = require('./utils/database')
const loginRoutes = require('./routes/login')
const signUpRoutes = require('./routes/signup')
const expenseRoutes = require('./routes/expense')
const bodyParser = require('body-parser')
const User = require('./models/User')
const Expense = require('./models/Expense')

const app = express()
var cors = require('cors')

app.use(bodyParser.json({extended : false}))
app.use(cors())

app.use('/login',loginRoutes)
app.use('/signup' , signUpRoutes)

app.use('/expense' , expenseRoutes )

User.hasMany(Expense)
Expense.belongsTo(User)


sequelize
.sync()
.then(result=>{
    console.log("database created or updated")
    app.listen(5000)
})
.catch(err=>console.log(err))

