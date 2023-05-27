import { useCart } from '@/libs/Context/CartProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <HeaderAndFooter>
            <div>
                <div className="container mx-auto mt-10">
                    <div className="shadow-md my-10">
                        {/* main div  */}
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 md:col-span-9 bg-white px-10 py-10">
                                <div className="flex justify-between border-b pb-8">
                                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                    <h2 className="font-semibold text-2xl">
                                        {cartItems?.length} Items
                                    </h2>
                                </div>
                                <div className="flex mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                        Product Details
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                        Quantity
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                        Price
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                        Total
                                    </h3>
                                </div>
                                {cartItems?.map((e: any, i: any) => {
                                    return (
                                        <div
                                            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                                            key={i}
                                        >
                                            <div className="flex w-2/5">
                                                {/* <!-- product --> */}
                                                <div className="w-20">
                                                    <Image
                                                        height={500}
                                                        width={500}
                                                        className="w-24"
                                                        src={e?.product?.images?.[0]}
                                                        alt="product_image"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="font-bold text-sm">
                                                        {e?.product?.name?.slice(0, 40)}
                                                    </span>
                                                    <span className="text-red-500 text-xs">
                                                        Apple
                                                    </span>
                                                    <button
                                                        // href="#"
                                                        onClick={() =>
                                                            removeFromCart(e?.product?._id)
                                                        }
                                                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-1/5">
                                                <svg
                                                    onClick={() =>
                                                        decreaseQuantity(e?.product?._id)
                                                    }
                                                    className="fill-current text-gray-600 w-3 cursor-pointer"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                </svg>

                                                <div className="mx-2 border text-center w-8">
                                                    {e?.quantity}
                                                </div>

                                                <svg
                                                    onClick={() =>
                                                        increaseQuantity(e?.product?._id)
                                                    }
                                                    className="fill-current text-gray-600 
                                                    cursor-pointer w-3"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                </svg>
                                            </div>
                                            <span className="text-center w-1/5 font-semibold text-sm">
                                                ${e?.product?.discountPrice}
                                            </span>
                                            <span className="text-center w-1/5 font-semibold text-sm">
                                                $
                                                {parseFloat(e?.product?.discountPrice) *
                                                    e?.quantity}
                                            </span>
                                        </div>
                                    );
                                })}

                                <Link
                                    href="/product"
                                    className="flex font-semibold text-[#ff9900] text-sm mt-10"
                                >
                                    <svg
                                        className="fill-current mr-2 text-[#ff9900] w-4"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                    </svg>
                                    Continue Shopping
                                </Link>
                            </div>
                            <div id="summary" className="col-span-12 md:col-span-3 px-8 py-10">
                                <h1 className="font-semibold text-2xl border-b pb-8">
                                    Order Summary
                                </h1>
                                <div className="flex justify-between mt-10 mb-5">
                                    <span className="font-semibold text-sm uppercase">Items 3</span>
                                    <span className="font-semibold text-sm">590$</span>
                                </div>
                                <div>
                                    <label className="font-medium inline-block mb-3 text-sm uppercase">
                                        Shipping
                                    </label>
                                    <select className="block p-2 text-gray-600 w-full text-sm">
                                        <option>Standard shipping - $10.00</option>
                                    </select>
                                </div>
                                <div className="py-5">
                                    <label
                                        htmlFor="promo"
                                        className="font-semibold inline-block mb-3 text-sm uppercase"
                                    >
                                        Promo Code
                                    </label>
                                    <input
                                        type="text"
                                        id="promo"
                                        placeholder="Enter your promo code"
                                        className="p-2 text-sm w-full border-b-2"
                                    />
                                </div>
                                <button className="bg-[#ff9900] px-5 py-2 text-sm text-white uppercase ">
                                    Apply
                                </button>
                                <div className="border-t mt-8">
                                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                        <span>Total cost</span>
                                        <span>$600</span>
                                    </div>
                                    <button className="bg-[#ff9900] hover:bg-[#f09000] font-semibold py-3 text-sm text-white uppercase w-full rounded-sm">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderAndFooter>
    );
};

export default Cart;
