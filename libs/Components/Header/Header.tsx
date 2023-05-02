import { useAuth } from '@/libs/Context/AuthProvider';
import { productData } from '@/libs/common/constant/Data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const { currentUser, logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState();
    const [searchData, setSearchData] = useState<any>(null);

    const handleSearchChange = (e: any) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =
            productData &&
            productData.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };
    return (
        <div>
            <div className="fixed top-0 w-full z-50 bg-white  shadow-md">
                <div className=" navbar w-[90%] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/"
                            className="flex items-center justify-center font-semibold text-2xl"
                        >
                            <Image
                                src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                                alt=""
                                className="w-12 "
                                width={200}
                                height={200}
                            />
                            <span className="font-sans font-bold text-black ml-[0.4px]">
                                enzilla
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <form className="w-[50vw]">
                            <div className="flex">
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        className="block p-[0.7rem] w-full z-20 text-sm text-gray-900  rounded-r-lg bg-gray-200 rounded-l-lg"
                                        placeholder="Search Mockups, Logos, Design Templates..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 right-0 p-[0.66rem] text-sm font-medium text-white bg-[#ff9900] rounded-r-lg border border-[#ff9900]"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                    {/* Search result dropdown */}
                                    {searchData && searchData.length !== 0 ? (
                                        <>
                                            {' '}
                                            <div className="bg-gray-50 shadow-md absolute w-full rounded-b-md h-80 overflow-y-auto top-11 p-2 z-50">
                                                {searchData &&
                                                    searchData.map((i: any, index: any) => {
                                                        return (
                                                            <Link
                                                                href={`/product/${i._id}`}
                                                                key={index}
                                                            >
                                                                <div className="w-full flex items-start py-2">
                                                                    <Image
                                                                        src={i?.image_Url[0]?.url}
                                                                        alt=""
                                                                        className="w-[40px] h-[40px] mr-[10px]"
                                                                        height={200}
                                                                        width={200}
                                                                    />
                                                                    <h1>{i.name}</h1>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="dropdown dropdown-end">
                            <Link href="/product/cart">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle  hover:bg-white"
                                    htmlFor="my-drawer-4"
                                >
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm bg-[#ff9900] border-none indicator-item">
                                            0
                                        </span>
                                    </div>
                                </label>
                            </Link>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-11 rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2">
                                    {!currentUser ? (
                                        <div className="w-[45px] h-[45px] animate-pulse bg-slate-400  rounded-full"></div>
                                    ) : (
                                        <Image
                                            alt="user_Profile"
                                            height={300}
                                            width={300}
                                            className="h-10"
                                            src={currentUser?.profilePicture}
                                        />
                                    )}
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li onClick={logout}>
                                    <p>Logout</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
