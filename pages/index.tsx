import { useAuth } from '@/libs/Context/AuthProvider';
import React from 'react';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentUser } = useAuth();
    console.log(currentUser);
    return (
        <div>
            <p className="text-5xl">welcome {currentUser?.name}</p>
        </div>
    );
};

export default index;
