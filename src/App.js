import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";



function App() {
  const {cartItems}=useSelector((state)=>state.cart)
  const {isOpen}=useSelector((state)=>state.modal)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])

  return (
    <>
    {
      isOpen && <Modal/>
    }
      
      <Navbar/>
      <CartContainer/>
    </>
  )
}
export default App;
