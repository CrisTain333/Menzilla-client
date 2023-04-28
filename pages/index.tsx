import Header from '@/libs/Components/Header/Header';
import { useAuth } from '@/libs/Context/AuthProvider';
import React from 'react';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentUser, isLoading } = useAuth();
    console.log(currentUser);
    return (
        <div>
            <Header />
            <p className="text-5xl">welcome {isLoading ? 'User Loading ..' : currentUser?.name}</p>
        </div>
    );
};

export default index;
