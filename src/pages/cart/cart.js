import React, { useContext } from 'react'
import { PRODUCTS } from '../products'
import { ShopContext } from '../../context/Shop-Context'
import CartItem from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const {  cartitems,getTotalCartAmount } = useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((product)=>{
          if (cartitems[product.id] !== 0){
            return <CartItem data={product}/>
          }

        })}
      </div>
      {getTotalCartAmount() > 0 ? 
      <div className="checkout">
        <p>Subtotal: Rs {getTotalCartAmount()}</p>
        <button onClick={()=>navigate('/')}>Continuing Shopping</button>
        <button onClick={()=>navigate('/cart')}>Check Out</button>
      </div>
      : <h1>Your Cart is Empty !</h1> }
    </div>
  )
}
