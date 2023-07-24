import React, { useContext } from 'react';
import './cart.css'
import { ShopContext } from '../../context/Shop-Context'


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data
    const { cartitems, addToCart, removeFromCart, updateCartCount } = useContext(ShopContext)




    return (
        <div className='cartitem'>
            <img src={productImage} alt="" />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>Rs.{price}</p>
                <div className="counthandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartitems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>

                </div>
            </div>

        </div>
    )
}

export default CartItem;
