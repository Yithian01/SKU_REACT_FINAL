import React from 'react';
import './cssFile/ProductList.css'
import {  useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/product/productSlice';
import { useSearchParams } from 'react-router-dom';


const ProductList = () => {
    const [ query, setQuery ] = useSearchParams();
    const keyword = query.get("q") || "";
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.value)
    useEffect(()=>{
        dispatch(getProduct(keyword));
    },[dispatch,keyword,query])


    return (

        <div className='product-list container '>
                <h2 className='product-list-title'>상품목록</h2>
            {
                    <div className='product-item-container'>
                    {
                        products && products.map(item=>{
                        return <ProductItem key={item.id} item={item} />
                         })  
                    }
                 </div>
               
            }       
        </div>
    );
};

export default ProductList;