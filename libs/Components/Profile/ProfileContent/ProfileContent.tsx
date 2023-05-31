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

    const [uploadLoader, setUploadLoader] = useState(false);

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
                        {/* <div className="flex justify-center w-full">
                            <div className="relative">
                                {isLoading ? (
                                    <div className="w-36 h-36 animate-pulse bg-slate-400  rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"></div>
                                ) : (
                                    <Image
                                        src={
                                            selectedImage
                                                ? URL.createObjectURL(selectedImage)
                                                : userProfile?.profilePicture
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
                        </div> */}
                        <div className="flex items-center flex-col justify-start space-x-5 ">
                            <div className="relative">
                                <div className="relative overflow-hidden h-32 w-32">
                                    <Image
                                        src={
                                            selectedImage
                                                ? URL.createObjectURL(selectedImage)
                                                : userProfile?.profilePicture
                                        }
                                        // src={`${currentUser?.profilePicture || ''}`}
                                        className="w-32 h-32 rounded-full object-cover border-[3px] border-[#ff9900]"
                                        alt="profilePicture"
                                        height={500}
                                        width={500}
                                    />
                                </div>
                                {selectedImage && (
                                    <button
                                        disabled={uploadLoader}
                                        className={`absolute cursor-pointer font-bold -top-5 -right-2 ${
                                            uploadLoader && 'cursor-not-allowed'
                                        }`}
                                        onClick={handleCancel}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>

                            <div>
                                <div className="p-3  mt-2 space-x-5">
                                    {selectedImage ? (
                                        <button
                                            className={` text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer flex items-center ${
                                                uploadLoader
                                                    ? 'cursor-not-allowed bg-gray-300'
                                                    : 'bg-[#ff9900]'
                                            }`}
                                            disabled={uploadLoader}
                                            // onClick={changeProfilePicture}
                                        >
                                            {uploadLoader ? (
                                                <>
                                                    <div
                                                        className={`flex items-center justify-center`}
                                                    >
                                                        <div
                                                            className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                            role="status"
                                                        >
                                                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                                Loading...
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="ml-2">Uploading ....</p>
                                                </>
                                            ) : (
                                                <>Upload</>
                                            )}
                                        </button>
                                    ) : (
                                        <label
                                            htmlFor="profile"
                                            className="bg-[#ff9900] text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer"
                                            // onClick={handleProfileUpdate}
                                        >
                                            Change Profile
                                        </label>
                                    )}
                                </div>
                                <input
                                    onChange={imageChange}
                                    type="file"
                                    id="profile"
                                    name="profilePicture"
                                    className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
                                />
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
                                            value={userProfile?.name}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, firstName: e.target.value };
                                                })
                                            }
                                            // value={name}
                                            // onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className=" w-[100%] md:w-[50%]">
                                        <label className="block pb-2">Email Address</label>
                                        <input
                                            type="text"
                                            className={`${styles.input} !w-[95%] mb-1 md:mb-0`}
                                            required
                                            value={userProfile?.email}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, email: e.target.value };
                                                })
                                            }
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
                                            value={userProfile?.phone}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, phone: e.target.value };
                                                })
                                            }
                                        />
                                    </div>
                                    <div className=" w-[100%] md:w-[50%]">
                                        <label className="block pb-2">Zip Code</label>
                                        <input
                                            type="number"
                                            className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                            required
                                            value={userProfile?.zipCode}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, zipCode: e.target.value };
                                                })
                                            }
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
                                            value={userProfile?.address1}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, address1: e.target.value };
                                                })
                                            }
                                        />
                                    </div>
                                    <div className=" w-[100%] md:w-[50%]">
                                        <label className="block pb-2">Address 2</label>
                                        <input
                                            type="address"
                                            className={`${styles.input} !w-[95%]`}
                                            required
                                            value={userProfile?.address2}
                                            onChange={(e) =>
                                                setUserProfile((prev: any) => {
                                                    return { ...prev, address2: e.target.value };
                                                })
                                            }
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
