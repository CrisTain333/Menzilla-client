import React, { useState, useEffect } from 'react';

import HeaderOnly from '@/libs/Layout/HeaderOnly/HeaderOnly';

import ProfileContent from '@/libs/Components/Profile/ProfileContent/ProfileContent';
import ProfileSideBar from '@/libs/Components/Profile/ProfileSidebar/ProductSidebar';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useRouter } from 'next/router';

const Profile = () => {
    // eslint-disable-next-line no-unused-vars
    const { currentUser, isLoading } = useAuth();
    const [active, setActive] = useState(1);
    const router = useRouter();
    const { query } = router;
    const from_Success_Page = query?.from_Success_Page;
    const from_Order_Details_Page = query?.from_Order_Details_Page;
    const slugNumber: unknown | number | any = query?.selected_path;
    const selected_path = parseFloat(slugNumber);
    console.log(selected_path);

    useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!isLoading) {
            if (!token && !currentUser) {
                router.push('/');
            }

            if (from_Success_Page === 'true') {
                setActive(2);
            }
            if (from_Order_Details_Page === 'true') {
                setActive(2);
            }
            if (selected_path || selected_path === undefined || selected_path === null) {
                setActive(selected_path);
            }
        }

        // if()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser, selected_path]);

    return (
        <div className="min-h-screen ">
            <HeaderOnly>
                <div className={`flex  py-10`}>
                    <div className="w-[50px] md:w-[335px] sticky md:mt-0 mt-[18%]">
                        <ProfileSideBar active={active} setActive={setActive} />
                    </div>
                    <ProfileContent active={active} />
                </div>
            </HeaderOnly>
        </div>
    );
};

export default Profile;
