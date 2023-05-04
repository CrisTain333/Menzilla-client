import React, { useState, useEffect } from 'react';

import HeaderOnly from '@/libs/Layout/HeaderOnly/HeaderOnly';

import ProfileContent from '@/libs/Components/Profile/ProfileContent/ProfileContent';
import ProfileSideBar from '@/libs/Components/Profile/ProfileSidebar/ProductSidebar';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useRouter } from 'next/router';

const Profile = () => {
    const { currentUser, isLoading } = useAuth();
    const [active, setActive] = useState(1);
    const router = useRouter();
    console.log(router);

    // if (isLoading) {
    //     return <p>Loading .....</p>;
    // } else {

    // }

    useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!token && !currentUser) {
            router.push('/');
        }
    }, [currentUser]);

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
