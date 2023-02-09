import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div className='container'>
            <Banner />
            <ProductList/>
        </div>
    );
};




export default Home;