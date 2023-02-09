import React from 'react';
import './cssFile/Footer.css'



const Footer = () => {
    return (
        <div className='footer'>
            <div calssName='footer-box'>
                <ul calssName='option'>
                    <li>옵션1</li>
                    <li>옵션2</li>
                    <li>옵션3</li>
                </ul>
            </div>


            <ul className='option'>
                <li><a target="_blank" href="https://facebook.com"> <img src="/img/fo-img/facebook.png" alt="" /> </a></li>
                <li><a target="_blank" href="https://twitter.com"> <img src="/img/fo-img/twitter.png" alt="" /> </a></li>
                <li><a target="_blank" href="https://youtube.com"> <img src="/img/fo-img/youtube.png" alt="" /> </a></li>
            </ul>
            
        </div>
    );
};

export default Footer;





