import React, { useContext } from 'react'
import { ShopContext } from '../context/Shop-Context'


const Product = (props) => {
    const { addToCart, cartitems } = useContext(ShopContext)
    const { id, productName, price, productImage } = props.data
    const cartItemAmount = cartitems[id]

    return (
        <div className='product'>
            <img src={productImage} alt="Image Not Available" />
            <div className='description'>
                <p> <b>{productName}</b></p>
                <p>Rs.{price}</p>
            </div>
            <button className='addtocartbtn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>

        </div>
    )
}

export default Product
