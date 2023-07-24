import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../pages/products';
import Product from '../components/Product';
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartitems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))

    }

    const removeFromCart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = PRODUCTS.find((Product) => Product.id === Number(item));
                totalAmount += cartitems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const updateCartCount = (newAmount, itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: newAmount }))
    }
    const contextValue = { cartitems, addToCart, removeFromCart, updateCartCount, getTotalCartAmount }
    console.log(cartitems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
