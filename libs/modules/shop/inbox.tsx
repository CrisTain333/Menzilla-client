import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import ShopInbox from '@/libs/Components/Shop/inbox/ShopInbox';
import React from 'react';

const Inbox = () => {
    return (
        <div>
            <div>
                <div className="w-full">
                    <DashboardHeader />
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <DashboardSidebar active={7} />
                        </div>
                        <div className="w-full flex flex-col mt-10 col-span-9">
                            <ShopInbox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;
