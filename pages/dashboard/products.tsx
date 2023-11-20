import ShopProducts from '@/libs/modules/shop/ShopProducts';
import Head from 'next/head';
import React from 'react';

const products = () => {
    return (
        <div>
            <Head>
                <title>Products - Dashboard</title>
            </Head>
            <ShopProducts />
        </div>
    );
};

export default products;
