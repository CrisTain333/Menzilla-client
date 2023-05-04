import { useAuth } from '@/libs/Context/AuthProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import styles from '@/styles/styles';
import Image from 'next/image';
import React from 'react';

const CreateShop = () => {
    const { isLoading, currentUser } = useAuth();

    const handleSubmit = () => {};
    return (
        <div>
            <div className="shadow-md w-[50%] mx-auto rounded-md p-2 my-5">
                <div className="my-4">
                    <h1 className="text-4xl font-bold text-center">Register As a Seller</h1>
                </div>
                <div className="flex justify-center w-full">
                    <div className="flex">
                        <Image
                            src={`${currentUser?.profilePicture || ''}`}
                            className="w-20 h-20 rounded-full object-cover border-[5px] border-[#ff9900]"
                            alt="profilePicture"
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
                <br />
                <br />
                <div className="w-full px-5">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full md:flex block pb-3">
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block font-semibold pb-2">Shop Name</label>
                                <input
                                    type="text"
                                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                    required
                                />
                            </div>
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block pb-2">Email Address</label>
                                <input
                                    type="text"
                                    className={`${styles.input} !w-[95%] mb-1 md:mb-0`}
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full md:flex block pb-3">
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block pb-2">Phone Number</label>
                                <input
                                    type="number"
                                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                    required
                                />
                            </div>
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block pb-2">Zip Code</label>
                                <input
                                    type="number"
                                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full md:flex block pb-3">
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block pb-2">Address</label>
                                <input
                                    type="address"
                                    className={`${styles.input} !w-[95%]`}
                                    required
                                />
                            </div>
                            <div className=" w-[100%] md:w-[50%]">
                                <label className="block pb-2">Address 2</label>
                                <input
                                    type="address"
                                    className={`${styles.input} !w-[95%]`}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center pb-4">
                            <button
                                className={`w-[250px] h-[40px] border  text-center bg-[#ff9900] text-white rounded-md mt-8 cursor-pointer flex justify-center items-center text-base `}
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateShop;
