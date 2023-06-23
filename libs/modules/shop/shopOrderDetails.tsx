import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import { Footer } from '@/libs/Components/Footer/Footer';
import OrderDetails from '@/libs/Components/Shop/OrderDetails';
import React from 'react';

const ShopOrderDetails = () => {
    return (
        <div>
            <DashboardHeader />
            <OrderDetails />
            <Footer />
        </div>
    );
};

export default ShopOrderDetails;
