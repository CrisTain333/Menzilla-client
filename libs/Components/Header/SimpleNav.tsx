import React from 'react';
import { GrApps } from 'react-icons/gr';
import { AiOutlineAppstore, AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';

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
                                            className="dropdown-content menu p-2 mt-48 shadow bg-base-100 rounded-md w-60 -ml-5 text-black"
                                        >
                                            <li>
                                                <a>Item 1</a>
                                            </li>
                                            <li>
                                                <a>Item 2</a>
                                            </li>
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
