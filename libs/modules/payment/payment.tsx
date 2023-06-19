import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const PaymentPage = () => {
    return (
        <div>
            <HeaderAndFooter>
                <br />
                <br />
                <CheckoutSteps active={2} />
                {/* <Checkouts /> */}
                <br />
                <br />
            </HeaderAndFooter>
        </div>
    );
};

export default PaymentPage;
