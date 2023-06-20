import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { RxCross1 } from 'react-icons/rx';
import { useRouter } from 'next/router';
import styles from '@/styles/styles';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useCart } from '@/libs/Context/CartProvider';
import { toast } from 'react-hot-toast';
import { createPaymentIntent, createUserOrder } from '@/libs/Api';
import { FaAmazonPay } from 'react-icons/fa';
import SmallLoader from '../SmallLoader/SmallLoader';

const Payment = () => {
    const { orderData, refresh } = useCart();
    const [open, setOpen] = useState(false);
    const { currentUser } = useAuth();
    const router = useRouter();
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const orderData = JSON.parse(localStorage.getItem('latestOrder'));
    //     setOrderData(orderData);
    // }, []);

    const createOrder = (data: any, actions: any) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: 'Sunflower',
                        amount: {
                            currency_code: 'USD',
                            value: orderData?.totalPrice
                        }
                    }
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: 'NO_SHIPPING'
                }
            })
            .then((orderID: any) => {
                return orderID;
            });
    };

    const order: any = {
        cart: orderData?.cart,
        shippingAddress: orderData?.shippingAddress,
        user: currentUser && currentUser,
        totalPrice: orderData?.totalPrice
    };

    const onApprove = async (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
            const { payer } = details;

            let paymentInfo = payer;

            if (paymentInfo !== undefined) {
                paypalPaymentHandler(paymentInfo);
            }
        });
    };

    const paypalPaymentHandler = async (paymentInfo: any) => {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // order.paymentInfo = {
        //     id: paymentInfo.payer_id,
        //     status: 'succeeded',
        //     type: 'Paypal'
        // };
        // await axios.post(`${server}/order/create-order`, order, config).then((res) => {
        //     setOpen(false);
        //     navigate('/order/success');
        //     toast.success('Order successful!');
        //     localStorage.setItem('cartItems', JSON.stringify([]));
        //     localStorage.setItem('latestOrder', JSON.stringify([]));
        //     window.location.reload();
        // });
    };

    const paymentData = {
        amount: Math.round(orderData?.totalPrice * 100)
    };

    const paymentHandler = async (e: any) => {
        e.preventDefault();
        try {
            const paymentIntent = await createPaymentIntent(paymentData);
            const client_secret = paymentIntent.client_secret;
            if (!stripe || !elements) return;
            const cardElement = elements.getElement(CardNumberElement);

            if (!cardElement) {
                return;
            }

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: cardElement
                }
            });

            if (result.error) {
                toast.error(result?.error?.message as string);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status,
                        type: 'Credit Card'
                    };
                }

                const finalResult = await createUserOrder(order);
                if (finalResult.status === 200) {
                    setOpen(false);
                    router.push('/order/success');
                    toast.success('Order successful!');
                    localStorage.setItem('cartItems', JSON.stringify([]));
                    localStorage.setItem('latestOrder', JSON.stringify([]));
                    refresh();
                } else {
                    toast.error(finalResult.message);
                }
            }
        } catch (error: any) {
            console.log(error);
            toast.error('something went wrong');
        }
    };

    const cashOnDeliveryHandler = async (e: any) => {
        e.preventDefault();

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };

        // order.paymentInfo = {
        //     type: 'Cash On Delivery'
        // };

        // await axios.post(`${server}/order/create-order`, order, config).then((res) => {
        //     setOpen(false);
        //     navigate('/order/success');
        //     toast.success('Order successful!');
        //     localStorage.setItem('cartItems', JSON.stringify([]));
        //     localStorage.setItem('latestOrder', JSON.stringify([]));
        //     window.location.reload();
        // });
    };

    return (
        <div className="w-full flex flex-col items-center py-8">
            <div className="w-[90%] 1000px:w-[70%] block md:flex space-x-0 md:space-x-5">
                <div className="w-full md:w-[65%] shadow-md rounded-md">
                    <PaymentInfo
                        user={currentUser}
                        open={open}
                        setOpen={setOpen}
                        onApprove={onApprove}
                        createOrder={createOrder}
                        paymentHandler={paymentHandler}
                        cashOnDeliveryHandler={cashOnDeliveryHandler}
                        isLoading={isLoading}
                    />
                </div>
                <div className="w-full md:w-[35%] md:mt-0 mt-8 shadow-md  rounded-md">
                    <CartData orderData={orderData} />
                </div>
            </div>
        </div>
    );
};

const PaymentInfo = ({
    user,
    open,
    setOpen,
    onApprove,
    createOrder,
    paymentHandler,
    cashOnDeliveryHandler,
    isLoading
}: any) => {
    const [select, setSelect] = useState(1);

    return (
        <div className="w-full md:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
            {/* select buttons */}
            <div>
                <div className="flex w-full pb-5 border-b mb-2">
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                        onClick={() => setSelect(1)}
                    >
                        {select === 1 ? (
                            <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                        ) : null}
                    </div>
                    <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                        Pay with Debit/credit card
                    </h4>
                </div>

                {/* pay with card */}
                {select === 1 ? (
                    <div className="w-full flex border-b">
                        <form className="w-full" onSubmit={paymentHandler}>
                            <div className="w-full flex pb-3">
                                <div className="w-[50%]">
                                    <label className="block pb-2">Name On Card</label>
                                    <input
                                        required
                                        placeholder={user?.name}
                                        className={`${styles.input} !w-[95%] text-[#444444b9]`}
                                        value={user?.name}
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <label className="block pb-2">Exp Date</label>
                                    <CardExpiryElement
                                        className={`${styles.input}`}
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '19px',
                                                    lineHeight: '1.5',
                                                    color: '#444'
                                                },
                                                empty: {
                                                    color: '#3a120a',
                                                    backgroundColor: 'transparent',
                                                    '::placeholder': {
                                                        color: '#444'
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="w-full flex pb-3">
                                <div className="w-[50%]">
                                    <label className="block pb-2">Card Number</label>
                                    <CardNumberElement
                                        className={`${styles.input} !h-[35px] !w-[95%]`}
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '19px',
                                                    lineHeight: ' 1.5',
                                                    color: '#444'
                                                },
                                                empty: {
                                                    color: '#3a120a',
                                                    backgroundColor: 'transparent',
                                                    '::placeholder': {
                                                        color: '#444'
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <label className="block pb-2">CVV</label>
                                    <CardCvcElement
                                        className={`${styles.input} !h-[35px]`}
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '19px',
                                                    lineHeight: '1.5',
                                                    color: '#444'
                                                },
                                                empty: {
                                                    color: '#3a120a',
                                                    backgroundColor: 'transparent',
                                                    '::placeholder': {
                                                        color: '#444'
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={` px-12 my-2 py-2  ${
                                    isLoading
                                        ? '!bg-[#ff990086] text-[#fff] h-[45px] rounded-[5px]  text-[18px] font-[600]'
                                        : '!bg-[#ffa217] text-[#fff] h-[45px] rounded-[5px]  text-[18px] font-[600]'
                                }`}
                            >
                                {isLoading ? (
                                    <SmallLoader />
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center">Pay</div>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                ) : null}
            </div>

            <br />
            {/* paypal payment */}
            <div>
                <div className="flex w-full pb-5 border-b mb-2">
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                        onClick={() => setSelect(2)}
                    >
                        {select === 2 ? (
                            <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                        ) : null}
                    </div>
                    <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                        Pay with Paypal
                    </h4>
                </div>

                {/* pay with payement */}
                {select === 2 ? (
                    <div className="w-full flex border-b">
                        <div
                            className={`${styles.button} !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
                            onClick={() => setOpen(true)}
                        >
                            Pay Now
                        </div>
                        {open && (
                            <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                                <div className="w-full md:w-[40%] h-screen md:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                                    <div className="w-full flex justify-end p-3">
                                        <RxCross1
                                            size={30}
                                            className="cursor-pointer absolute top-3 right-3"
                                            onClick={() => setOpen(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}
            </div>

            <br />
            {/* cash on delivery */}
            <div>
                <div className="flex w-full pb-5 border-b mb-2">
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                        onClick={() => setSelect(3)}
                    >
                        {select === 3 ? (
                            <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                        ) : null}
                    </div>
                    <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                        Cash on Delivery
                    </h4>
                </div>

                {/* cash on delivery */}
                {select === 3 ? (
                    <div className="w-full flex">
                        <form className="w-full" onSubmit={cashOnDeliveryHandler}>
                            <input
                                type="submit"
                                value="Confirm"
                                className={`${styles.button} !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
                            />
                        </form>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

const CartData = ({ orderData }: any) => {
    const shipping = orderData?.shipping?.toFixed(2);
    return (
        <div className="w-full bg-[#fff] rounded-md p-5 pb-8 h-44">
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
                <h5 className="text-[18px] font-[600]">${orderData?.subTotalPrice}</h5>
            </div>
            <br />
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
                <h5 className="text-[18px] font-[600]">${shipping}</h5>
            </div>
            <br />
            <div className="flex justify-between border-b pb-3">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
                <h5 className="text-[18px] font-[600]">
                    {orderData?.discountPrice ? '$' + orderData.discountPrice : '-'}
                </h5>
            </div>
            <h5 className="text-[18px] font-[600] text-end pt-3">${orderData?.totalPrice}</h5>
            <br />
        </div>
    );
};

export default Payment;
