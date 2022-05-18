import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState={
    cartItems: cartItems,
    amount: 3,
    total: 0,
    isLoading: true,
}

const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[]
        },
        removeItem:(state,action)=>{
            const itemId=action.payload
            state.cartItems=state.cartItems.filter(item=>item.id!==itemId)

        },
        increment:(state,action)=>{
            const cartItem=state.cartItems.find(item=>item.id===action.payload)
            cartItem.amount=cartItem.amount+1
        },
        decrement:(state,action)=>{
            const cartItem=state.cartItems.find(item=>item.id===action.payload)
            cartItem.amount=cartItem.amount-1
        },
        calculateTotal:(state)=>{
            let amount=0
            let total=0
            state.cartItems.forEach(item=>{
                amount+=item.amount
                total+=item.amount*item.price
            })
            state.amount=amount
            state.total=total
        }
        }
    }
)

console.log(cartSlice)

export const {clearCart,removeItem,increment,decrement,calculateTotal}= cartSlice.actions
export default cartSlice.reducer