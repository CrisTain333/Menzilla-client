import Checkouts from '@/libs/Components/Checkout/Checkout';
import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import { useAuth } from '@/libs/Context/AuthProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Checkout = () => {
    const { currentUser } = useAuth();
    const router = useRouter();
    useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!token && !currentUser) {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);
    return (
        <div>
            <HeaderAndFooter>
                <br />
                <br />
                <CheckoutSteps active={1} />
                <Checkouts />
                <br />
                <br />
            </HeaderAndFooter>
        </div>
    );
};

export default Checkout;
