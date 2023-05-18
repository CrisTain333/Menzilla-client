import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import CreateProduct from '@/libs/Components/Shop/CreateProduct';
import React from 'react';

const CreateShopProduct = () => {
    return (
        <div>
            <div>
                <DashboardHeader />
                <div className="flex items-center justify-between w-full">
                    <div className="w-20 md:w-64">
                        <DashboardSidebar active={4} />
                    </div>
                    <div className="w-full justify-center flex">
                        <CreateProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateShopProduct;
