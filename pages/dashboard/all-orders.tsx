import ShopOrders from '@/libs/modules/shop/shop-orders';
import Head from 'next/head';
import React from 'react';

const allOrders = () => {
    return (
        <div>
            <Head>
                <title>Orders - Dashboard</title>
            </Head>
            <ShopOrders />
        </div>
    );
};

export default allOrders;
