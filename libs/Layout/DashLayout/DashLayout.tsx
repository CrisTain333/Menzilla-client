import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import React from 'react';

const DashLayout = ({ children }: any) => {
    return (
        <div>
            <DashboardHeader />
            <div className="w-[80px] 800px:w-[330px]">
                <DashboardSidebar active={1} />
            </div>

            <div>{children}</div>
        </div>
    );
};

export default DashLayout;
