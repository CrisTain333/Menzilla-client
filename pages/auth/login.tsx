import { useAuth } from '@/libs/Context/AuthProvider';
import Login from '@/libs/modules/entrance/login';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Log_in = () => {
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push('/');
        }
    }, [currentUser, router]);

    return (
        <div>
            <Login />
        </div>
    );
};

export default Log_in;
