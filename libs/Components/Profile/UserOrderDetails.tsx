import { getSingleOrder } from '@/libs/Api';
import styles from '@/styles/styles';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { BsFillBagFill } from 'react-icons/bs';
import { ThreeCircles } from 'react-loader-spinner';

const UserOrderDetails = () => {
    const router = useRouter();
    const orderId = router?.query?.orderId;

    const { data, isLoading } = useQuery({
        queryKey: ['orderId', orderId],
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
        <div className={`py-4 min-h-screen ${styles.section}`}>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <BsFillBagFill size={30} color="crimson" />
                    <h1 className="pl-2 text-[25px]">Order Details</h1>
                </div>
                <Link href={`${`/profile?from_Order_Details_Page=true`}`}>
                    <div
                        className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font-[600] !h-[45px] text-[18px]`}
                    >
                        Order List
                    </div>
                </Link>
            </div>

            <div className="w-full flex items-center justify-between pt-6">
                <h5 className="text-[#00000084]">
                    Order ID: <span>#{data?._id?.slice(0, 8)}</span>
                </h5>
                <h5 className="text-[#00000084]">
                    Placed on: <span>{moment(data?.createdAt).format('llll')}</span>
                </h5>
            </div>

            {/* order items */}
            <br />
            <br />

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
                    {data &&
                        data?.cart?.map((item: any, index: number) => (
                            <div className="w-full flex items-start mb-5" key={index}>
                                <Image
                                    src={`${item?.product?.images?.[0]}`}
                                    alt=""
                                    className="w-20 h-20"
                                    height={500}
                                    width={500}
                                />
                                <div className="w-full">
                                    <h5 className="pl-3 text-[20px]">{item?.product?.name}</h5>
                                    <h5 className="pl-3 text-[20px] text-[#00000091]">
                                        ${item?.product?.discountPrice} x {item.quantity}
                                    </h5>
                                </div>
                            </div>
                        ))}
                </>
            )}

            <div className="border-t w-full text-right">
                <h5 className="pt-3 text-[18px]">
                    Total Price: <strong>US${data?.totalPrice}</strong>
                </h5>
            </div>
            <br />
            <br />
            <div className="w-full 800px:flex items-center">
                <div className="w-full 800px:w-[60%]">
                    <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
                    <h4 className="pt-3 text-[20px]">
                        {data?.shippingAddress?.address1 + ' ' + data?.shippingAddress?.address2}
                    </h4>
                    <h4 className=" text-[20px]">{data?.shippingAddress?.country}</h4>
                    <h4 className=" text-[20px]">{data?.shippingAddress?.city}</h4>
                    <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
                </div>
                <div className="w-full 800px:w-[40%]">
                    <h4 className="pt-3 text-[20px]">Payment Info:</h4>
                    <h4>
                        Status: {data?.paymentInfo?.status ? data?.paymentInfo?.status : 'Not Paid'}
                    </h4>
                </div>
            </div>
            <br />
            <br />
            <div>
                <Link href="/">
                    <div
                        className={`px-5 py-2.5 font-medium bg-blue-400 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-sm text-sm w-[15%]`}
                    >
                        <span className="text-white flex items-center font-semibold">
                            Send Message <BiMessageDots size={20} className="ml-1" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserOrderDetails;
