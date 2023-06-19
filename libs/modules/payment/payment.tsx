import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import Payment from '@/libs/Components/Payment/Payment';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const PaymentPage = () => {
    return (
        <div>
            <HeaderAndFooter>
                <br />
                <br />
                <CheckoutSteps active={2} />
                <Payment />
                <br />
                <br />
            </HeaderAndFooter>
        </div>
    );
};

export default PaymentPage;
