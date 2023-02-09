import React from 'react';
import './../components/cssFile/Nav.css';
import { useSelector ,useDispatch } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import { logout } from '../store/user/userSlice';

const Nav = () => {
    const cart=useSelector(state=>state.cart)
    const user = useSelector(state=>state.user.value);
    const dispatch =useDispatch();
    const navigator =useNavigate();
    const onSearch = (e)=>{
        if(e.key === 'Enter'){
            navigator(`?q=${e.target.value}`)
            
        }
    }
    
    return (
        <nav className='nav'>
            <span className='nav-title'><Link to='/'><img src='./img/logo.png' alt="로고" /></Link></span>
            <div className='search-box'>
                <input type="text" placeholder='찿는 상품을 입력하세요' onKeyUp={onSearch}/>
            </div>
            <div>
            <span >
                <Link to='/cart'>
                <i className="fas fa-shopping-cart">
                {
                    user ? 
                    <div className='cart-amount'>{cart.length}</div>:
                    <div className='cart-amount'>0</div>
                }
                </i>
                </Link>
            </span>
            <span className='user'>
                {
                    user ? 
                    <span className='user' onClick={()=>{dispatch(logout(false))}}>로그아웃 </span> :
                    <span className='user' onClick={()=>navigator('/login')}>로그인</span> 

                }
            </span>
            </div>
        </nav>
    );
};

export default Nav;