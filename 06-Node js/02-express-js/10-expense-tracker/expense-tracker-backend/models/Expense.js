const Sequelize = require('sequelize')

const sequelize = require('../utils/database')
const Expense = sequelize.define('expenses',{
    id : {
     type : Sequelize.INTEGER,
     autoIncrement : true,
     primaryKey : true
    },
    amount : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    description : {
       type :  Sequelize.STRING,
    } ,
    category : Sequelize.STRING

})

module.exports = Expense