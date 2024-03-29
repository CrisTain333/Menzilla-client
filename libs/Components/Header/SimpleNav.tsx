import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BiMenuAltLeft } from 'react-icons/bi';
import Link from 'next/link';
import { categoriesData } from '@/libs/common/constant/Data';
import DropDown from './Dropdown/DropDown';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useSeller } from '@/libs/Context/sellerProvider';
import { RxDashboard } from 'react-icons/rx';

const SimpleNav = () => {
    const [dropDown, setDropDown] = useState(false);
    const { currentUser } = useAuth();
    const { isSeller } = useSeller();
    return (
        <div>
            <header className="p-5  bg-[#1C2B35] text-white">
                <div className="w-[90%] mx-auto">
                    <div className="container flex justify-between h-10 mx-auto  md:space-x-8">
                        <ul className="items-stretch hidden space-x-3 md:flex justify-center ">
                            <li className="flex">
                                <div className="flex border-r-2 pr-2">
                                    <div className="flex w-60  items-center px-4 py-2 -mb-1 border-r-2 mr-2 border  justify-between  border-gray-600 mt-1 dropdown cursor-pointer">
                                        <div onClick={() => setDropDown(!dropDown)}>
                                            <div className="relative h-[60px] mt-[10px] w-[270px]">
                                                <BiMenuAltLeft
                                                    size={30}
                                                    className="absolute top-3 left-2"
                                                />

                                                <span className="h-[90%] flex justify-between items-center ml-10">
                                                    All Categories
                                                    <IoIosArrowDown
                                                        size={20}
                                                        className="absolute right-14 top-4 cursor-pointer"
                                                        onClick={() => setDropDown(!dropDown)}
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                {dropDown ? (
                                                    <DropDown
                                                        categoriesData={categoriesData}
                                                        setDropDown={setDropDown}
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            {/* <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/best-deal"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Best Selling
                                </Link>
                            </li> */}
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/product"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/faq"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/contact-us"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            {currentUser && (
                                <li className="flex">
                                    <Link
                                        rel="noopener noreferrer"
                                        href="/profile"
                                        className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                    >
                                        Profile
                                    </Link>
                                </li>
                            )}
                        </ul>

                        {isSeller ? (
                            <>
                                <div className="flex items-center">
                                    <Link href="/dashboard">
                                        <div
                                            className={`text-center text-[#ffffff] bg-[#ff9900] rounded-sm cursor-pointer text-base py-2 w-full px-5 flex justify-center items-center mt-2`}
                                        >
                                            <span>
                                                <RxDashboard size={20} />
                                            </span>
                                            <span className="ml-2">Dashboard</span>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center">
                                    <Link href="/create-shop">
                                        <h1 className="text-[#ffffff] bg-[#ff9900] flex items-center p-2 rounded-sm mt-2">
                                            Become Seller
                                            <IoIosArrowForward className="ml-1" />
                                        </h1>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default SimpleNav;
