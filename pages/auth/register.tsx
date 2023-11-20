import Register from '@/libs/modules/entrance/register';
import React from 'react';

const register = () => {
    return (
        <div>
            {/* <Register /> */}
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                        <form className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input
                                        type="email"
                                        id="login-email"
                                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="mb-12 flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input
                                        type="password"
                                        id="login-password"
                                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                            >
                                Log in
                            </button>
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                Don&apos;t have an account?
                                <a
                                    href="#"
                                    className="underline-offset-4 font-semibold text-gray-900 underline"
                                >
                                    Sign up for free.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                    <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
                        <p className="mb-8 text-3xl font-semibold leading-10">
                            We work 10x faster than our compeititors and stay consistant. While
                            they're bogged won with techincal debt, we're realeasing new features.
                        </p>
                        <p className="mb-4 text-3xl font-semibold">John Elmond</p>
                        <p className="">Founder, Emogue</p>
                        <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
                    </div>
                    <img
                        className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
                        src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                </div>
            </div>
        </div>
    );
};

export default register;
