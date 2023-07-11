/* eslint-disable react-hooks/exhaustive-deps */
import { useSeller } from '@/libs/Context/sellerProvider';
import DashLayout from '@/libs/Layout/DashLayout/DashLayout';
import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
    const { currentSeller, isSeller, isLoading } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (isLoading === false) {
            if (!currentSeller) {
                router.push('/auth/seller-login');
            }
        }
    }, [currentSeller, isSeller, router]);
    return <DashLayout></DashLayout>;
};

export default Dashboard;
