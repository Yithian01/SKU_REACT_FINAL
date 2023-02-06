import React from 'react';
import './cssFile/ProductItem.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cart/cartSlice';


const ProductItem = ({ item}) => {
    const dispatch = useDispatch()

    return (
        <div className='product-item'>
            <img
             src={item.product_img}
              alt="product"
              className='item-image'/>
              <div className='item-name'>{item.product_name}</div>
              <div className='item-price'>{item.price}</div>
              <button className='add-cart-btn' onClick={()=>dispatch(addCart(item))}>
                 <i className="fas fa-plus"></i>
                 장바구니에 담기
              </button>
        </div>
    );
};

export default ProductItem;