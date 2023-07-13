import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LoginBanner from '../../../public/images/loginBanner.jpg';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useAuth } from '@/libs/Context/AuthProvider';
import SmallLoader from '@/libs/Components/SmallLoader/SmallLoader';

const Login = () => {
    const { login, currentUser, isLoading: loading } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            email,
            password
        };

        const loginError = await login(data);
        if (loginError) {
            toast.error(loginError);
            setError(loginError);
            setIsLoading(false);
        } else {
            toast.success('Logged in successfully');
            setIsLoading(false);
            router.push('/');
        }
    };

    useEffect(() => {
        if (loading === false) {
            if (currentUser) {
                router.push('/');
            }
        }
    }, [currentUser, router]);

    return (
        <div>
            <section className=" min-h-screen flex items-center justify-center">
                {/* <!-- login container --> */}
                <div className="bg-gray-50 md:bg-gray-100 flex rounded-lg shadow-lg w-[95%] md:max-w-3xl p-5 items-center">
                    {/* <!-- form --> */}
                    <div className="w-[95%] md:w-1/2 px-2 md:px-16">
                        <h2 className="font-bold text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-[#ff6a94]  to-[#ff6992] text-center">
                            Login
                        </h2>
                        {error && (
                            <p className="my-2 text-center text-[16px] text-red-600">{error}</p>
                        )}

                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <input
                                className="p-2 mt-8 rounded-sm border"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <div className="relative">
                                <input
                                    className="p-2 rounded-sm border w-full"
                                    type={isVisible ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                />
                                <span
                                    onClick={handleShowPassword}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
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

                            <button className="bg-gradient-to-r from-[#ff6a94] to-[#ff6992]  rounded-sm text-white py-2 hover:scale-105 duration-300">
                                {isLoading ? <SmallLoader /> : 'Login'}
                            </button>
                        </form>

                        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
                            <p>don&apos;t have an account ? </p>
                            <Link href="/auth/register" className="ml-1 underline text-blue-500">
                                {' '}
                                Register
                            </Link>
                        </div>
                    </div>

                    {/* <!-- image --> */}
                    <div className="md:block hidden w-1/2">
                        <Image
                            height={500}
                            width={500}
                            alt="loginImage"
                            className="rounded-2xl"
                            src={LoginBanner}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
