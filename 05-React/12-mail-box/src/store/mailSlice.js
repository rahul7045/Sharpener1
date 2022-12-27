import { createSlice } from "@reduxjs/toolkit";

const initialState ={mailData :[]}
const mailSlice =createSlice({
    name : 'mail',
    initialState,
    reducers :{
        add(state , action){
            state.mailData =[action.payload , ...state.mailData]
        },
        remove(state , action){
            state.mailData = state.mailData.filter(mail=>mail.id!=action.payload.id)
        }
    }
})

export const mailAction = mailSlice.actions
export default mailSlice.reducer