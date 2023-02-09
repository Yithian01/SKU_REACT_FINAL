import React from 'react';
import { useParams } from 'react-router-dom';
import './cssFile/Detail.css';
import { useSelector} from 'react-redux';



const Detail = () => {
    const product=useSelector(state=>state.product.value);
    let params = useParams();
    // const cart=useSelector(state=>state.cart);
    const idCng = Number(params.id) // 주소로 받아서 오는 값은 string 으로 받아서 오므로 변환해주어야 한다.
    const restItem = product.filter((ele) => ele.id ===idCng);  

    console.log(restItem);

    return (
        restItem && (<div className='detailPage container'>
            <div className='detail-info'>
                <h2 className='detail-name'>제품이름 : {restItem[0].product_name}</h2>
                <h3 className='detail-id'>제품 가격 : {restItem[0].price}</h3>
                <div className='detail-discription'> {restItem[0].discription} </div> 
            </div>
            
        </div>)
    );
};

export default Detail;