import { getSingleOrder } from '@/libs/Api';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const TrackOrderDetails = () => {
    const router = useRouter();
    const orderId = router?.query?.orderId;

    const { data, isLoading } = useQuery({
        queryKey: ['orders', orderId],
        queryFn: async () => {
            const data = await getSingleOrder(orderId);
            return data?.data;
        }
    });

    if (!data && !isLoading) {
        return (
            <div className="h-[50vh] flex items-center justify-center">
                <p className="text-5xl">Something went wrong .......</p>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full h-[80vh] flex justify-center items-center">
                {' '}
                {isLoading ? (
                    <>
                        <div className="flex items-center justify-center">
                            <ThreeCircles
                                height="100"
                                width="100"
                                color="#ff9900"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="three-circles-rotating"
                                outerCircleColor=""
                                innerCircleColor=""
                                middleCircleColor=""
                            />
                        </div>
                    </>
                ) : (
                    <>
                        {' '}
                        <>
                            {data && data?.status === 'Processing' ? (
                                <h1 className="text-[20px]">Your Order is processing in shop.</h1>
                            ) : data?.status === 'Transferred to delivery partner' ? (
                                <h1 className="text-[20px]">
                                    Your Order is on the way for delivery partner.
                                </h1>
                            ) : data?.status === 'Shipping' ? (
                                <h1 className="text-[20px]">
                                    Your Order is on the way with our delivery partner.
                                </h1>
                            ) : data?.status === 'Received' ? (
                                <h1 className="text-[20px]">
                                    Your Order is in your city. Our Delivery man will deliver it.
                                </h1>
                            ) : data?.status === 'On the way' ? (
                                <h1 className="text-[20px]">
                                    Our Delivery man is going to deliver your order.
                                </h1>
                            ) : data?.status === 'Delivered' ? (
                                <h1 className="text-[20px]">Your order is delivered!</h1>
                            ) : data?.status === 'Processing refund' ? (
                                <h1 className="text-[20px]">Your refund is processing!</h1>
                            ) : data?.status === 'Refund Success' ? (
                                <h1 className="text-[20px]">Your Refund is success!</h1>
                            ) : null}
                        </>
                    </>
                )}
            </div>
        </div>
    );
};

export default TrackOrderDetails;
