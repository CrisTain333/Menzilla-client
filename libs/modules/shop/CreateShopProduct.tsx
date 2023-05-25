import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import CreateProduct from '@/libs/Components/Shop/CreateProduct';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const CreateShopProduct = () => {
    const { currentSeller, isSeller } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (!currentSeller && !isSeller) {
            router.push('/auth/seller-login');
        }
    }, [currentSeller, isSeller, router]);
    return (
        <div>
            <div>
                <DashboardHeader />
                <div className="flex items-center justify-between w-full">
                    <div className="w-20 md:w-72">
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
