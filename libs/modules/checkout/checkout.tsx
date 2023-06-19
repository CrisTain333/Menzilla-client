import CheckoutSteps from '@/libs/Components/Checkout/CheckoutSteps';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const Checkout = () => {
    return (
        <div>
            <HeaderAndFooter>
                <br />
                <br />
                <CheckoutSteps active={1} />
                <br />
                <br />
            </HeaderAndFooter>
        </div>
    );
};

export default Checkout;
