import React, { useEffect, useState } from 'react';
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
    const { currentUser, isLoading } = useAuth();
    const [selectedImage, setSelectedImage] = useState<any>(null);

    const [name, setName] = useState(currentUser && currentUser?.name);
    const [email, setEmail] = useState(currentUser && currentUser?.email);
    const [phoneNumber, setPhoneNumber] = useState(currentUser && currentUser?.phone);
    const [zipCode, setZipCode] = useState();
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const [userProfile, setUserProfile] = useState({
        email: currentUser?.email,
        name: currentUser?.name,
        phone: currentUser?.phone,
        profilePicture: currentUser?.profilePicture,
        zipCode: currentUser?.zipCode,
        address1: currentUser?.address1,
        address2: currentUser?.address2
    });

    useEffect(() => {
        setUserProfile({
            email: currentUser?.email,
            name: currentUser?.name,
            phone: currentUser?.phone,
            profilePicture: currentUser?.profilePicture,
            zipCode: currentUser?.zipCode || '',
            address1: currentUser?.address1 || '',
            address2: currentUser?.address2 || ''
        });
    }, [currentUser]);

    console.log(userProfile);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    // Handle Select Image
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // Remove selected Image
    const handleCancel = () => {
        setSelectedImage('');
    };

    return (
        <div className="w-full">
            {/* profile */}
            {active === 1 && (
                <>
                    <div className="shadow-md w-[90%] mx-auto rounded-md p-2">
                        <div className="flex justify-center w-full">
                            <div className="relative">
                                {isLoading ? (
                                    <div className="w-36 h-36 animate-pulse bg-slate-400  rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"></div>
                                ) : (
                                    <Image
                                        src={
                                            selectedImage
                                                ? URL.createObjectURL(selectedImage)
                                                : currentUser?.profilePicture
                                        }
                                        // src={`${currentUser?.profilePicture || ''}`}
                                        className="w-36 h-36 rounded-full object-cover border-[5px] border-[#ff9900]"
                                        alt="profilePicture"
                                        height={500}
                                        width={500}
                                    />
                                )}

                                <label
                                    id="ProfileImage"
                                    className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]"
                                >
                                    <AiOutlineCamera />

                                    <input
                                        onChange={imageChange}
                                        type="file"
                                        name="images"
                                        id="ProfileImage"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="w-full px-5">
                            <form onSubmit={handleSubmit}>
                                <div className="w-full md:flex block pb-3">
                                    <div className=" w-[100%] md:w-[50%]">
                                        <label className="block font-semibold pb-2">
                                            Full Name
                                        </label>
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
