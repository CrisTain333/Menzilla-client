import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import AllProducts from '@/libs/Components/Shop/AllProducts';
import React from 'react';

const ShopOrders = () => {
    return (
        <div>
            <div>
                <div className="w-full">
                    <DashboardHeader />
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-2">
                            <DashboardSidebar active={2} />
                        </div>
                        <div className="w-full flex flex-col justify-center mt-10 col-span-10">
                            <AllProducts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopOrders;
