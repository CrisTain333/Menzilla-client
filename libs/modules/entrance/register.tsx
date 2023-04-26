import { registerUser } from '@/libs/Api';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };
    const handleRegisterUser = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const data = {
            name,
            email,
            phone,
            password
        };
        try {
            const res = await registerUser(data);
            if (res?.status !== 201) {
                return toast.error(res?.message);
            }
            toast.success(res?.message);
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
                {/* <!-- login container --> */}
                <div className="bg-gray-100 flex rounded-sm shadow-lg max-w-3xl p-5 items-center mx-5">
                    {/* <!-- form --> */}
                    <div className="w-full px-2 md:px-10">
                        <h2 className="font-bold text-2xl  text-center">Register</h2>

                        <form onSubmit={handleRegisterUser} className="flex flex-col gap-3">
                            <div className="flex flex-col md:flex-row  md:space-x-5  mt-5">
                                <div className="">
                                    <label htmlFor="" className="font-medium text-sm p-2 ">
                                        Name
                                    </label>{' '}
                                    <br />
                                    <input
                                        className="p-2 mt-1 rounded-sm border w-full "
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="font-medium text-sm p-2">
                                        Email
                                    </label>

                                    <br />
                                    <input
                                        className="p-2 mt-1 rounded-sm border w-full "
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="w-full">
                                    <label htmlFor="" className="font-medium text-sm p-2">
                                        Phone
                                    </label>{' '}
                                    <br />
                                    <input
                                        className="p-2 mt-1 rounded-sm border w-full"
                                        type="number"
                                        required
                                        name="phone"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="" className="font-medium text-sm p-2">
                                    Password
                                </label>{' '}
                                <input
                                    className="p-2 rounded-sm mt-1 border w-full"
                                    type={isVisible ? 'text' : 'password'}
                                    name="password"
                                    required
                                    minLength={6}
                                    placeholder="Password"
                                />
                                <span
                                    onClick={handleShowPassword}
                                    className="absolute top-12 right-3 -translate-y-1/2 cursor-pointer"
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
                            {/* error div  */}
                            <div className="flex items-center justify-center">
                                {' '}
                                <button className="bg-gradient-to-r from-[#ff6a94]  to-[#ff6992] w-auto rounded-md text-white py-2 px-3 hover:scale-105 duration-300 mt-3">
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div> */}

                        {/* <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                            <svg
                                className="mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="25px"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            Login with Google
                        </button> */}

                        <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
                            <p>All ready have an account ? </p>
                            <Link href="/auth/login" className="ml-1 underline text-blue-500">
                                {' '}
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* <!-- image --> */}
                    {/* <div className="md:block hidden w-1/2">
                        <Image
                            height={500}
                            width={500}
                            alt="loginImage"
                            className="rounded-2xl"
                            src={LoginBanner}
                        />
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Register;
