import React, { useState } from 'react';
import styles from '@/styles/styles';
import Image from 'next/image';
import axiosInstance from '@/libs/common/utils/axios';
import { toast } from 'react-hot-toast';
import SmallLoader from '@/libs/Components/SmallLoader/SmallLoader';

const CreateShop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState<any>(false);
    // handle Select image
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // Remove selected Image
    const handleCancel = () => {
        setSelectedImage('');
    };

    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;
        const shopName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const zipCode = form.zip.value;
        const address = form.address.value;
        const password = form.password.value;
        const file: any = selectedImage;
        const formData = new FormData();
        formData.append('shopProfile', file);
        formData.append('shopName', shopName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('zipCode', zipCode);
        formData.append('address', address);
        formData.append('password', password);

        try {
            const res = await axiosInstance.post('/shop/register', formData);
            if (res?.data?.status !== 201) {
                setIsLoading(false);
                return toast.error(res?.data?.message);
            }
            setRegisterSuccess(formData);
            toast.success(res?.data?.message);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error('some thing went wrong ');
        }
    };

    return registerSuccess ? (
        <div className="p-6 shadow-md w-full max-w-lg mx-auto mt-20">
            <div className=" flex items-center justify-center">
                <div className="bg-gray-200 rounded-[100%] p-5 shrink-0 w-[88px] h-[88px]">
                    <i className="ri-mail-unread-fill text-blue-500 text-5xl"></i>
                    {/* <RiMailLine className="text-white text-5xl" /> */}
                </div>
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-gray-800 text-2xl font-bold mb-5">Verify your email address</h2>
                <p className="text-gray-600 text-md dark:text-gray-300 mb-10">
                    Hey <span className="font-bold">{registerSuccess?.name || 'Coder'}</span>, We
                    {`'`}ve send an email to verify your email address and activate your account.
                    The link in the email will expire in 24 hours.
                </p>
                <p className="text-gray-400 text-mb mt-5 dark:text-gray-300">
                    <span
                        className="text-blue-500 cursor-pointer"
                        // onClick={handleNotReceiveEmail}
                    >
                        Click here
                    </span>{' '}
                    if you did not receive an email. If you find any issue, feel free to{' '}
                    {/* <span className="text-blue-500 cursor-pointer" onClick={handleContactUs}>
                            Contact Us
                        </span> */}
                </p>
            </div>
        </div>
    ) : (
        <>
            {' '}
            <div>
                <div className="shadow-md w-[95%]  md:w-[50%] mx-auto rounded-md p-2 my-5">
                    <div className="my-4">
                        <h1 className="text-3xl font-bold text-center">Register As a Seller</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <Image
                                    src={
                                        selectedImage
                                            ? URL.createObjectURL(selectedImage)
                                            : 'https://i.ibb.co/XXZXrbb/shop.png'
                                    }
                                    className="w-20 h-20 rounded object-cover"
                                    alt="profilePicture"
                                    height={500}
                                    width={500}
                                />
                                {selectedImage && (
                                    <button
                                        disabled={isLoading}
                                        className={`absolute cursor-pointer font-bold top-5 -left-7 ${
                                            isLoading && 'cursor-not-allowed'
                                        }`}
                                        onClick={handleCancel}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="shopProfileUpload"
                                    className="px-5 py-2 ml-3 font-medium  text-black transition-all duration-300 border-slate-800 border rounded-md hover:bg-slate-800 hover:text-white text-sm"
                                >
                                    Upload Shop Profile
                                </label>

                                <input
                                    onChange={imageChange}
                                    className="hidden"
                                    type="file"
                                    name="shopProfile"
                                    id="shopProfileUpload"
                                />
                            </div>
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
                                        name="name"
                                        placeholder="Enter shope name"
                                        required
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2 font-semibold">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className={`${styles.input} !w-[95%] mb-1 md:mb-0`}
                                        name="email"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2 font-semibold">Phone Number</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        placeholder="shop phone number"
                                        required
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2 font-semibold">Zip Code</label>
                                    <input
                                        type="number"
                                        name="zip"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        placeholder="Enter zip code"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2 font-semibold">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className={`${styles.input} !w-[95%]`}
                                        placeholder="Shop address"
                                        required
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2 font-semibold">Password</label>
                                    <div className="relative">
                                        <input
                                            className={`${styles.input} !w-[95%]`}
                                            type={isVisible ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Password"
                                            minLength={6}
                                        />
                                        <span
                                            onClick={handleShowPassword}
                                            className="absolute top-1/2 right-7 -translate-y-1/2 cursor-pointer"
                                        >
                                            {isVisible ? (
                                                <>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-gray-400"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </>
                                            ) : (
                                                <>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-gray-400"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                        />
                                                    </svg>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center pb-4">
                                <button
                                    className={`w-44 h-[40px] border  text-center bg-[#ff9900] text-white rounded-md mt-8 cursor-pointer flex justify-center items-center text-base `}
                                    type="submit"
                                >
                                    {isLoading ? (
                                        <>
                                            <SmallLoader />{' '}
                                            <span className="ml-2">Registering ....</span>
                                        </>
                                    ) : (
                                        'Register'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateShop;
