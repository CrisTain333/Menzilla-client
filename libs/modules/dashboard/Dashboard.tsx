import { useSeller } from '@/libs/Context/sellerProvider';
import React from 'react';

const Dashboard = () => {
    const { currentSeller } = useSeller();
    return <div>dashboard {currentSeller?.name}</div>;
};

export default Dashboard;
