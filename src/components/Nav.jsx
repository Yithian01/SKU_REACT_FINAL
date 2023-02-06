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
    
    return (
        <nav className='nav'>
            <span className='nav-title'><Link to='/'>SHOP</Link></span>
            <span >
                <Link to='/cart'>
                <i className="fas fa-shopping-cart">
                    <div className='cart-amount'>{cart.length}</div>
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
        </nav>
    );
};

export default Nav;