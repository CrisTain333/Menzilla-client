import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginBanner from '../../../public/images/loginBanner.jpg';

const Register = () => {
    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                {/* <!-- login container --> */}
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    {/* <!-- form --> */}
                    <div className="w-full px-10">
                        <h2 className="font-bold text-2xl  text-center text-transparent  bg-clip-text bg-gradient-to-r from-[#ff6a94]  to-[#ff6992]">
                            Register
                        </h2>

                        <form action="" className="flex flex-col gap-3">
                            <div className="flex space-x-5  mt-5">
                                <div className="w-1/2">
                                    <label htmlFor="" className="font-medium text-sm p-2">
                                        Name
                                    </label>{' '}
                                    <br />
                                    <input
                                        className="p-2 mt-1 rounded-sm border"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="" className="font-medium text-sm p-2">
                                        Email
                                    </label>

                                    <br />
                                    <input
                                        className="p-2 mt-1 rounded-sm border"
                                        type="email"
                                        name="email"
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
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="gray"
                                    className="bi bi-eye absolute top-12 right-3 -translate-y-1/2 cursor-pointer"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-center">
                                {' '}
                                <button className="bg-gradient-to-r from-[#ff6a94]  to-[#ff6992] w-auto rounded-md text-white py-2 px-3 hover:scale-105 duration-300 mt-5">
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
