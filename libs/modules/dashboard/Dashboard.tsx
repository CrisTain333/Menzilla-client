import { useSeller } from '@/libs/Context/sellerProvider';
import DashLayout from '@/libs/Layout/DashLayout/DashLayout';
import React from 'react';

const Dashboard = () => {
    const { currentSeller } = useSeller();
    return <DashLayout></DashLayout>;
};

export default Dashboard;
