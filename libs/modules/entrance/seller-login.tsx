import SmallLoader from '@/libs/Components/SmallLoader/SmallLoader';
import { useSeller } from '@/libs/Context/sellerProvider';
import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const SellerLogin = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { isSeller, sellerLogin } = useSeller();
    const router = useRouter();

    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };

    const handleSubmit = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = {
            email,
            password
        };

        const loginError = await sellerLogin(data);
        if (loginError) {
            toast.error(loginError);
            setError(loginError);
            setIsLoading(false);
        } else {
            toast.success('Logged in successfully');
            router.push('/shop');
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div>
                <div className="shadow-md w-[95%]   md:w-[30%] mx-auto rounded-md p-2 my-20">
                    <div className="">
                        <div className="flex justify-center items-center mb-3">
                            <Image
                                src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                                width={400}
                                className="w-12"
                                height={500}
                                alt="Icon"
                            />
                            <span className="font-sans font-bold text-black ml-[0.4px]">
                                enzilla
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-center mt-2">Seller Login</h1>
                    </div>

                    <div className="w-full  px-5 mt-8">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%]">
                                    <label className="block pb-2 font-semibold">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className={`${styles.input} mb-1 md:mb-0`}
                                        name="email"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%]">
                                    <label className="block pb-2 font-semibold">Password</label>
                                    <div className="relative">
                                        <input
                                            className={`${styles.input}`}
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
                            {error && (
                                <p className="my-2 text-center text-[16px] text-red-600">{error}</p>
                            )}
                            <div className="flex justify-center items-center pb-4">
                                <button
                                    className={`w-full h-[40px] border  text-center bg-[#ff9900] text-white rounded-md mt-5 cursor-pointer flex justify-center items-center text-base `}
                                    type="submit"
                                >
                                    {isLoading ? (
                                        <>
                                            <SmallLoader />{' '}
                                        </>
                                    ) : (
                                        'Login'
                                    )}
                                </button>
                            </div>

                            <div className="my-2">
                                <span className="font-semibold text-sm">
                                    Don&apos;t have an seller account
                                    <Link
                                        className="text-blue-700 underline  ml-2"
                                        href="/create-shop"
                                    >
                                        register
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerLogin;
