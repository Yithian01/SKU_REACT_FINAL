import React from 'react';
import './cssFile/CartItem.css'
import { useDispatch,useSelector} from 'react-redux';
import { deleteCart } from '../store/cart/cartSlice';


const CartItem = ({item}) => {
    //기존의 State값을 가져와서 filter
    const dispatch = useDispatch();
    const cart=useSelector(state=>state.cart);
    const restItem = cart.filter((ele) => ele.id ===item.id);  // 일치하는 하나의 배열을 배열로 답아서 온다.
                                                                // 그렇기에 보내줄 때 0번배열로 보내주어야 한다.
    return (
        <div className='cart-item'>
            <img
             src={item.product_img}
             alt="cart-item"
             className='cart-item-img'/>
             <span className='cart-item-name'>{item.product_name}</span>
             <span className='cart-item-price'>{item.price}</span>
             <i className='fas fa-trash-alt'  onClick={()=>dispatch(deleteCart(restItem))}  />
             {/*dispatch(deleteCart()) */}
        </div>
    );
};

export default CartItem;