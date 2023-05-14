import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import React from 'react';

const DashLayout = ({ children }: any) => {
    return (
        <div>
            <DashboardHeader />
            <div className="w-20 md:w-64">
                <DashboardSidebar active={1} />
            </div>

            <div>{children}</div>
        </div>
    );
};

export default DashLayout;
