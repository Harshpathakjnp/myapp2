import React from 'react';
import { PRODUCTS } from '../products';
import Product from '../../components/Product';
import './shop.css';

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shoptitle'>
                <h1>HarshTech Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((item, i) => {
                    return < Product data={item}
                    />
                })}

            </div>
        </div>
    )
}

export default Shop;
