import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cssFile/CartList.css'

const CartList = () => {
    const cart = useSelector(state=>state.cart);
    const user = useSelector(state=>state.user.value);

    const cartItem = cart.length >=1 ?  cart.map((item,idx)=>{
        return <CartItem key={item.id} item={item}/>}) 
        : <div className='cart-empty container'>장바구니가 비어있습니다.</div>
    return (
        <div className='cart-list container'>
            <h2 className='cart-list-title'>장바구니</h2>
            {  user && cartItem}
        </div>
    );
};

export default CartList;