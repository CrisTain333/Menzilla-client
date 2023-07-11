/* eslint-disable react-hooks/exhaustive-deps */
import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import { Footer } from '@/libs/Components/Footer/Footer';
import OrderDetails from '@/libs/Components/Shop/OrderDetails';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const ShopOrderDetails = () => {
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
            <DashboardHeader />
            <OrderDetails />
            <Footer />
        </div>
    );
};

export default ShopOrderDetails;
