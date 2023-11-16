import React from 'react';
import payImage from '../../../../public/images/steps.png';
import Image from 'next/image';
const Steps = () => {
    return (
        <div>
            <div className="p-6  ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <h1 className="text-4xl text-center font-bold my-5">Buy Products</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-400 mt-2">In 4 Easy Steps</p>
                    </div>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-primary">
                                    1
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                    Create Your Account
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Create Your Account By Email Password and verify email address
                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-yellow-400">
                                    2
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                    Browse items by category
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Browse items by category And add to cart then start checkout process
                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-900 bg-purple-400 md:bg-teal-accent-400">
                                    3
                                </span>
                                <p className="text-lg font-semibold sm:text-base">Pay</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Pay By Our Secure Payment System . With Visa Card, Master Card ,
                                Google Card, Discovery Card, or by Any International Online Banking
                                Card or Cash on delivery
                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-teal-400 md:bg-deep-purple-accent-400">
                                    4
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                    Track Order In the Profile
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Product will be delivered in 5 Days on Your Location And After
                                Getting The Product In Hand Please Feel Free To Add A review
                            </p>
                        </div>
                    </div>
                    <div className="relative md:col-span-2 lg:col-span-2">
                        <Image
                            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
                            src={payImage}
                            alt="paying_image"
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
