import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItems from './CartItems';
import {openModal} from "../features/modal/modalSlice"

const CartContainer = () => {
    const {cartItems,amount,total}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    if (amount < 1) {
        return (
          <section className='cart'>
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        );
      }
  return (
    <section className='cart'>
        <header>
            <div>
                {
                    cartItems.map((item)=>{
                        return (
                            <>
                                <CartItems key={item.id} item={item}/>
                            </>
                        )
                    })
                }
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={()=>dispatch(openModal())}>
                    clear cart
                </button>
            </footer>
        </header>
    </section>
  )
}

export default CartContainer