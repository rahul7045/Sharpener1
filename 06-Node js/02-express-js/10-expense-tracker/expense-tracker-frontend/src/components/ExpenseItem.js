import axios from 'axios'
import React from 'react'
import './ExpenseItem.css'


 const ExpenseItem = (props) => {
 
    const deleteHandler=async()=>{
       const data = await axios.delete(`http://localhost:5000/expense/delete-product/${props.item.id}`)
       console.log("Deleted")
       props.deleteItem(props.item)
    }



  return (<>
       <li> <b>Category</b> :-{props.item.category} <b>Amount</b>:-${props.item.amount} <b>Description</b>:-{props.item.description}  <button className='bg-red' onClick={deleteHandler}>Delete</button> </li>
        {/* <li><span>{props.item.amount}</span>  <span>{props.item.description}</span>  <span> {props.item.category}</span> `
        <button onClick={editHandler}>Edit</button>   <button onClick={deleteHandler}>Delete</button> </li> */}
     </>
  )  
}

export default ExpenseItem
