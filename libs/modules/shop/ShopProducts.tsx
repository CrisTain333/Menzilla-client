import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import ShopPrducts from '@/libs/Components/Shop/ShopPrducts';
import React from 'react';

const ShopProducts = () => {
    return (
        <div>
            <div>
                <DashboardHeader />
                <div className="flex items-center justify-between w-full">
                    <div className="w-20 md:w-72">
                        <DashboardSidebar active={3} />
                    </div>
                    <div className="w-full justify-center flex">
                        <ShopPrducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;
