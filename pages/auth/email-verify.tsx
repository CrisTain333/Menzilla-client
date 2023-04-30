import axiosInstance from '@/libs/common/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const VerifyEmail = () => {
    const router = useRouter();
    const { query } = router;
    const verificationToken = query?.token;
    const [pageLoading, setPageLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (verificationToken) {
            verifyEmail(verificationToken as string);
        }
    }, [verificationToken]);

    const verifyEmail = async (token: string) => {
        try {
            const response = await axiosInstance.post(`/auth/verify-email?token=${token}`);
            if (response?.data?.status === 400) {
                setError(true);
                setErrorMessage(response?.data?.message);
                setPageLoading(false);
            } else if (response?.data?.status === 500) {
                setError(true);
                setErrorMessage('Account Activation Link Expired');
                setPageLoading(false);
            } else if (response?.data) {
                setPageLoading(false);
            }
            setPageLoading(false);
        } catch (e: any) {
            setPageLoading(false);
            setErrorMessage(e?.message);
            setError(true);
        }
    };

    const redirectToLogin = () => {
        router.push('/auth/login');
    };

    return pageLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-70 z-50">
            <div className="relative overflow-hidden">
                <span className="text-6xl  space-x-3 font-bold load">
                    <span>M</span>
                    <span>e</span>
                    <span>N</span>
                    <span>z</span>
                    <span>I</span>
                    <span>l</span>
                    <span>L</span>
                    <span>a</span>
                </span>
            </div>
        </div>
    ) : error || !verificationToken ? (
        <div className="h-[80vh] flex justify-center items-center  font-bold">
            <div>
                <div className="flex items-center justify-center  ">
                    <Image
                        height={500}
                        width={500}
                        className="h-28 w-28"
                        src="https://i.ibb.co/qmQMYV3/sad.png"
                        alt="sadEmoji"
                    />
                    {/* <IoSadOutline className="h-28 w-28 bg-clip-text text-transparent bg-gradient-to-r from-[#29f39a] to-[#02a2f8]" /> */}
                </div>
                <p className="text-7xl bg-clip-text text-transparent bg-gradient-to-br from-[#29f39a] to-[#02a2f8] my-4 text-center">
                    Oh no !{' '}
                </p>
                <p className="text-3xl mt-5 mb-2 bg-clip-text text-transparent bg-gradient-to-br from-[#29f39a] to-[#02a2f8] text-center">
                    {' '}
                    {errorMessage} . . . .
                </p>
                {/* <p className="text-xl mt-5 mb-2 text-red-500 text-center"></p> */}
            </div>
        </div>
    ) : (
        <div className="h-[80vh] flex flex-col justify-center items-center  font-bold">
            <div className="flex items-center justify-center  ">
                {' '}
                <Image
                    height={500}
                    width={500}
                    className="h-28 w-28"
                    src="https://i.ibb.co/gwC8wvz/badge.png"
                    alt="sadEmoji"
                />
            </div>
            <div className="my-3">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#8af7aa] to-[#11bd9e]">
                    Email Verification
                </p>
            </div>
            <p className="text-xl bg-clip-text text-transparent bg-gradient-to-br from-[#8af7aa] to-[#11bd9e] text-center font-semibold w-[30%]">
                Your email was Verified you can continue using the application
            </p>
            <p></p>
            <button
                onClick={redirectToLogin}
                className="px-3 py-2  bg-gradient-to-br from-[#8af7aa] to-[#11bd9e] rounded-md my-3 text-white"
            >
                Login now
            </button>
        </div>
    );
};

export default VerifyEmail;
