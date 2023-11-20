import CreateShopProduct from '@/libs/modules/shop/CreateShopProduct';
import Head from 'next/head';
import React from 'react';

const createProduct = () => {
    return (
        <div>
            <Head>
                <title>Add Product - Dashboard</title>
            </Head>
            <CreateShopProduct />
        </div>
    );
};

export default createProduct;
