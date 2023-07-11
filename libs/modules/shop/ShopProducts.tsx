import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import AllProducts from '@/libs/Components/Shop/AllProducts';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const ShopProducts = () => {
    const { currentSeller, isSeller, isLoading } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (isLoading === false) {
            if (!currentSeller) {
                router.push('/auth/seller-login');
            }
        }
    }, [currentSeller, isSeller, router]);
    return (
        <div>
            <div className="w-full">
                <DashboardHeader />
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-2">
                        <DashboardSidebar active={3} />
                    </div>
                    <div className="w-full flex flex-col justify-center mt-10 col-span-10">
                        <AllProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;
