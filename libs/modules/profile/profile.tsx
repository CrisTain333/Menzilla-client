import React, { useState } from 'react';

import HeaderOnly from '@/libs/Layout/HeaderOnly/HeaderOnly';

import ProfileContent from '@/libs/Components/Profile/ProfileContent/ProfileContent';
import ProfileSideBar from '@/libs/Components/Profile/ProfileSidebar/ProductSidebar';
import styles from '@/styles/styles';

const Profile = () => {
    const [active, setActive] = useState(1);
    return (
        <div className="min-h-screen">
            <HeaderOnly>
                <div className={`flex bg-[#f5f5f5] py-10`}>
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
