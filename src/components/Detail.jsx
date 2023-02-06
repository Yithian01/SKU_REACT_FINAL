import React from 'react';
import { useParams } from 'react-router-dom';
import './cssFile/Detail.css';


const Detail = () => {
    let params = useParams();
    console.log('파라미터 아이디',params.id);
    return (
        <div className='detailPage'>
            <div className='detail-img'>
                <img src="" alt="" />
            </div>
            <div className='detail-info'>
                <h2 className='detail-name'>상품 상세페이지</h2>
                <h3 className='defail-id'>제품의 아이디는 {params.id}</h3>
            </div>
            
        </div>
    );
};

export default Detail;