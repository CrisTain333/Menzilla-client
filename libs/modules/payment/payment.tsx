import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import Payment from '@/libs/Components/Payment/Payment';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
const PaymentPage = () => {
    const stripePromise = loadStripe(process.env.PAYMENT_SECRET_KEY as string);
    return (
        <div>
            <Head>
                <title>Payment - Menzilla</title>
            </Head>
            <HeaderAndFooter>
                <br />
                <br />
                <CheckoutSteps active={2} />
                <Elements stripe={stripePromise}>
                    <Payment />
                </Elements>
                <br />
                <br />
            </HeaderAndFooter>
        </div>
    );
};

export default PaymentPage;
