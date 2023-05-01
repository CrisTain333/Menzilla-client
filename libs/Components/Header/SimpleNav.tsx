import React from 'react';
import { AiOutlineAppstore, AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import { categoriesData } from '@/libs/common/constant/Data';

const SimpleNav = () => {
    return (
        <div>
            <header className="p-5  bg-[#1C2B35] text-white">
                <div className="w-[90%] mx-auto">
                    <div className="container flex justify-start h-10 mx-auto  md:space-x-8">
                        <ul className="items-stretch hidden space-x-3 md:flex justify-center ">
                            <li className="flex">
                                <div className="flex border-r-2 pr-2">
                                    <div
                                        className="flex w-60  items-center px-4 py-2 -mb-1 border-r-2 mr-2 border  justify-between  border-gray-600 mt-1 dropdown cursor-pointer"
                                        tabIndex={0}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-white mr-1">
                                                {' '}
                                                <AiOutlineAppstore size={25} className="" />
                                            </span>{' '}
                                            Shop Category
                                        </div>
                                        <div className="text-white ">
                                            <AiFillCaretDown />
                                        </div>

                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu p-2 mt-[37rem] shadow bg-base-100 -z-50 rounded-md w-64 -ml-6 text-black "
                                        >
                                            {categoriesData?.map((e: any, i: any) => {
                                                return (
                                                    <Link
                                                        href={`/product?category=${e?.title}`}
                                                        key={i}
                                                        tabIndex={0}
                                                    >
                                                        <li className="my-2 text-lg py-1 px-1    rounded-md hover:bg-gray-100 font-medium">
                                                            {e?.title}
                                                        </li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
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
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/best-deal"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Best Selling
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/product"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Product
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
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default SimpleNav;
