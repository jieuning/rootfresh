import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({

    name: 'cart',
    initialState: [],
    reducers : {
        increase(state, action) {
            let num = state.findIndex((i)=>{return i.id === action.payload})
            state[num].count++
        },
        decrease(state, action) {
            let num = state.findIndex((i)=>{return i.id === action.payload})
            state[num].count--
        },
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            let num = state.findIndex((i)=>{return i.id === action.payload})
            console.log(num)
            state.splice(num, 1)
        },
        checkedChange(state, action) {
            let num = state.findIndex((i)=>{return i.id === action.payload})
            state[num].checked = !state[num].checked
        },
        allCheckedTrue(state) {
            state.forEach((i)=> {i.checked = true})
        },
        allCheckedFalse(state) {
            state.forEach((i)=> {i.checked = false})
        }
    }
})

export const { 
    increase,
    decrease,
    addItem,
    removeItem,
    checkedChange,
    allCheckedTrue,
    allCheckedFalse  
} = cart.actions

export default cart;