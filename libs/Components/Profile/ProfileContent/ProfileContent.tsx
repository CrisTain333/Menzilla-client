import React, { useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';

import { useAuth } from '@/libs/Context/AuthProvider';
import styles from '@/styles/styles';
import Image from 'next/image';
import AllOrders from '../AllOrder/AllOrder';
import AllRefundOrders from '../AllRefundOrders/AllRefundOrders';
import TrackOrder from '../TrackOrder/TrackOrder';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import Address from '../Address/Address';

const ProfileContent = ({ active }: any) => {
    const { currentUser } = useAuth();

    const [name, setName] = useState(currentUser && currentUser?.name);
    const [email, setEmail] = useState(currentUser && currentUser?.email);
    const [phoneNumber, setPhoneNumber] = useState();
    const [zipCode, setZipCode] = useState();
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="w-[90%] mx-auto ">
            {/* profile */}
            {active === 1 && (
                <>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <Image
                                src={`${currentUser?.profilePicture || ''}`}
                                className="w-36 h-36 rounded-full object-cover border-[5px] border-[#ff9900]"
                                alt="profilePicture"
                                height={500}
                                width={500}
                            />
                            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                <AiOutlineCamera />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="w-full px-5">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block font-semibold pb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Email Address</label>
                                    <input
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-1 md:mb-0`}
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={phoneNumber}
                                        onChange={(e: any) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Zip Code</label>
                                    <input
                                        type="number"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        required
                                        value={zipCode}
                                        onChange={(e: any) => setZipCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Address 1</label>
                                    <input
                                        type="address"
                                        className={`${styles.input} !w-[95%]`}
                                        required
                                        value={address1}
                                        onChange={(e) => setAddress1(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Address 2</label>
                                    <input
                                        type="address"
                                        className={`${styles.input} !w-[95%]`}
                                        required
                                        value={address2}
                                        onChange={(e) => setAddress2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <input
                                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                required
                                value="Update"
                                type="submit"
                            />
                        </form>
                    </div>
                </>
            )}

            {/* order */}
            {active === 2 && (
                <div>
                    <AllOrders />
                </div>
            )}

            {/* Refund */}
            {active === 3 && (
                <div>
                    <AllRefundOrders />
                </div>
            )}

            {/* Track order */}
            {active === 5 && (
                <div>
                    <TrackOrder />
                </div>
            )}

            {/* Payment method */}
            {active === 6 && (
                <div>
                    <PaymentMethod />
                </div>
            )}

            {/*  user Address */}
            {active === 7 && (
                <div>
                    <Address />
                </div>
            )}
        </div>
    );
};

export default ProfileContent;
