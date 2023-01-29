import React, { useEffect, useRef, useState } from "react";
import "./Expense.css";
import axios from 'axios'
import ExpenseItem from "./ExpenseItem";
const Expenses = () => {

 
  const inputAmountRef = useRef();
  const inputDescRef = useRef();
  const inputCategoryRef = useRef();

  const[expenses , setExpenses] = useState([])
  //const[firstTime , setFirstTime] = useState(true)


  const addExpenseHandler = async (event) => {
    event.preventDefault();
    const obj = {
      amount: inputAmountRef.current.value,
      description: inputDescRef.current.value,
      category: inputCategoryRef.current.value,
    };

    try{

    const data = await axios.post('http://localhost:5000/expense/addForm',obj)

    //console.log("expense data received" , data.data.data)
    alert("data Added Successfully")

    inputAmountRef.current.value=""
    inputDescRef.current.value=""
    inputCategoryRef.current.value=""

    fetchData()
    }catch(err){
      console.log(err)
    }

  };

  const deleteExpenseHandler = async(item) => {
    const data = expenses.filter(expense=>expense.id!=item.id)
    setExpenses(data)
    fetchData()
  };

  async function fetchData(){
    try{
      const data = await axios.get('http://localhost:5000/expense/getExpense')
      console.log(data.data.data)
      setExpenses(data.data.data)
    }catch(err){
      console.log(err)
    }
    

  }

  useEffect(()=>{

    fetchData()

  },[])

 

  return (
    <div>
      <div>
        <form onSubmit={addExpenseHandler} className="form-expenses">
          <label htmlFor="amount">Amount</label>
          <input ref={inputAmountRef} type="number" id="amount" />

          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            id="desc"
            rows="3"
            ref={inputDescRef}
          ></textarea>
          <label htmlFor="category">Choose a car:</label>
          <select
            ref={inputCategoryRef}
            id="category"
           
          >
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Rent">Rent</option>
            <option value="Others">Others</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      </div>
        <div className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            item={expense}
            deleteItem={deleteExpenseHandler}
          />
        ))}
      </div>  
    </div>
  );
};

export default Expenses;
