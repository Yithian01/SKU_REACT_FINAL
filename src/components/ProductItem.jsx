import React from 'react';
import './cssFile/ProductItem.css'
import { useDispatch ,useSelector} from 'react-redux';
import { addCart } from '../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
//  사진이나 상품이름을 클릭하면 goToDetail함수가 userRedirect.jsx로 보내고 거기서 user값이 있다면 (로그인 되어 있다면 Detail로 보내고 아니면) ㅇ

const ProductItem = ({item}) => {
    const user = useSelector(state=>state.user.value);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const goToDetail = () =>{
        navigate(`/product/${item.id}`);
    }

    return (
        <div className='product-item'>
            <img
             onClick={goToDetail}
             src={item.product_img}
              alt="product"
              className='item-image'/>
              <div className='item-name' onClick={goToDetail}>{item.product_name}</div>
              <div className='item-price'>{item.price}원</div>
              <button className='add-cart-btn' onClick={()=> user ? dispatch(addCart(item)) : alert('로그인을 해주세요!')}>
                 <i className="fas fa-plus"></i>
                 장바구니에 담기
              </button>
        </div>
    );
};

export default ProductItem;