import SearchBar from '@/components/SearchBar/SearchBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewNavbar = () => {
    return (
        <div className="fixed top-0 w-full z-50   shadow-md bg-white ">
            <div className="navbar w-[90%] mx-auto">
                <div className="flex items-center py-2 justify-between">
                    {/*  : Start Div : */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center justify-center font-semibold text-2xl"
                        >
                            <Image
                                src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                                alt="brand_image"
                                className="w-12 "
                                width={100}
                                height={100}
                            />
                            <span className="font-sans font-bold text-black ml-[0.4px]">
                                enzilla
                            </span>
                        </Link>
                    </div>

                    {/* Center Div Search bar */}
                    <SearchBar />
                </div>
                {/* <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-2  lg:flex-row lg:items-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center font-semibold text-2xl"
                    >
                        <Image
                            src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                            alt="brand_image"
                            className="w-12 "
                            width={100}
                            height={100}
                        />
                        <span className="font-sans font-bold text-black ml-[0.4px]">enzilla</span>
                    </Link>
                    <input type="checkbox" className="peer hidden" id="navbar-open" />
                    <label
                        className="absolute top-5 right-5 cursor-pointer lg:hidden"
                        htmlFor="navbar-open"
                    >
                        <svg
                            className="h-7 w-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <nav
                        aria-label="Header Navigation"
                        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
                    >
                        <SearchBar />
                        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                            <a
                                href="#"
                                title=""
                                className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
                            >
                                {' '}
                                Log in{' '}
                            </a>
                            <a
                                href="#"
                                title=""
                                className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
                            >
                                Get free trial
                            </a>
                        </div>
                    </nav>
                </header> */}
            </div>
        </div>
    );
};

export default NewNavbar;
