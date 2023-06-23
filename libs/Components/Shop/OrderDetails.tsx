import { useRouter } from 'next/router';
import React from 'react';

const OrderDetails = () => {
    const router = useRouter();
    const orderId = router?.query?.orderId;
    console.log(router.query?.orderId);
    return <div>Order : {orderId}</div>;
};

export default OrderDetails;
