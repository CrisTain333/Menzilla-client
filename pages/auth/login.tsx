import { useAuth } from '@/libs/Context/AuthProvider';
import Login from '@/libs/modules/entrance/login';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { currentUser } = useAuth();
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const router = useRouter();

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     if (currentUser) {
    //         router.push('/');
    //     }
    // }, [currentUser]);
    return (
        <div>
            <Login />
        </div>
    );
};

export default login;
