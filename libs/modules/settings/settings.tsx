/* eslint-disable react-hooks/exhaustive-deps */
import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import Setting from '@/libs/Components/Setting/Setting';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const Settings = () => {
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
            <div>
                <DashboardHeader />
                <div className="flex justify-between w-full">
                    <div className="w-20 md:w-72">
                        <DashboardSidebar active={4} />
                    </div>
                    <div className="w-full">
                        <Setting />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
