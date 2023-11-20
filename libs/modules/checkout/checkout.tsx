import Checkouts from '@/libs/Components/Checkout/Checkout';
import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import { useAuth } from '@/libs/Context/AuthProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Checkout = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();
    useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!isLoading) {
            if (!token && !currentUser) {
                router.push('/auth/login');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);
    return (
        <div>
            <Head>
                <title>Checkout - Menzilla</title>
            </Head>

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
