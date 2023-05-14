import { useSeller } from '@/libs/Context/sellerProvider';
import DashLayout from '@/libs/Layout/DashLayout/DashLayout';
import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
    const { currentSeller, isSeller } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (!currentSeller && !isSeller) {
            router.push('/auth/seller-login');
        }
    }, [currentSeller, isSeller, router]);
    return <DashLayout></DashLayout>;
};

export default Dashboard;
