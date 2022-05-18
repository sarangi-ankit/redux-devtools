import React from 'react'
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem , increment,decrement} from '../features/cart/cartSlice';

const CartItems = ({item}) => {
    const dispatch=useDispatch()

  return (
    <article className='cart-item'>
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h4 className='item-price'>${item.price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={()=>dispatch(removeItem(item.id))}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={()=>dispatch(increment(item.id))}>
        
            <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{item.amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={()=>{
            if (item.amount===1){
                dispatch(removeItem(item.id))
            }
            dispatch(decrement(item.id))
        }} 
        >
            <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItems