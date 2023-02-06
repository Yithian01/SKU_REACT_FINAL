import React from 'react';
import { useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';


const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();


    const loginUser = (e)=>{
        e.preventDefault();
        dispatch(login(true));
        navigator('/');
    };
    
    return (
        <div>
            <form onSubmit={(e) => loginUser(e)}>
                <div className='userId'>
                    <div><label htmlFor="userId"></label></div>
                    <div><input id='userId' type="text" placeholder='아이디입력' /></div>
                </div>
                <div className='userPw'>
                    <div><label htmlFor="userPass"></label></div>
                    <div><input id='userPass' type="password" placeholder='비밀번호입력' /></div>
                </div>
                <div className='loginBtn'>
                    <input type="submit" value="로그인" onClick={dispatch} />
                </div>
            </form>
            
        </div>
    );
};

export default Login;