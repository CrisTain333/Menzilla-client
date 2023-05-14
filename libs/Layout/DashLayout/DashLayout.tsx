import DashboardHeader from '@/libs/Components/DashboardHeader/DashboardHeader';
import React from 'react';

const DashLayout = ({ children }: any) => {
    return (
        <div>
            <DashboardHeader />

            <div>{children}</div>
        </div>
    );
};

export default DashLayout;
