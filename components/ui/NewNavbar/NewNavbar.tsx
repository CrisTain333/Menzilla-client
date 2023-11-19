import SearchBar from '@/components/SearchBar/SearchBar';
import Navbar from '@/libs/Components/Header/Navbar';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useCart } from '@/libs/Context/CartProvider';
import { useSeller } from '@/libs/Context/sellerProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';
import { Sheet, SheetContent, SheetTrigger } from '../sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../dropdown-menu';
import { BookUser, LogOut, ShoppingBag, User } from 'lucide-react';

const NewNavbar = () => {
    const { currentUser, logout, isLoading, profileData } = useAuth();
    const { cartItems } = useCart();
    const { allProducts } = useSeller();
    const [searchTerm, setSearchTerm] = useState();
    const [open, setOpen] = useState(false);
    const [searchData, setSearchData] = useState<any>(null);
    const [userProfileData, setUserProfileData] = useState({
        name: profileData?.name,
        email: profileData?.email,
        phone: profileData?.phone,
        profilePicture: profileData?.profilePicture
    });

    useEffect(() => {
        setUserProfileData({
            name: profileData?.name,
            email: profileData?.email,
            phone: profileData?.phone,
            profilePicture: profileData?.profilePicture
        });
    }, [profileData]);

    const handleSearchChange = (e: any) => {
        e.preventDefault();
        const term = e.target.value;
        setSearchTerm(term);
        if (term?.length === 0 || term === '') {
            setSearchData([]);
            return;
        }

        const filteredProducts =
            allProducts &&
            allProducts.filter((product: any) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };
    return (
        <div className="fixed top-0 w-full z-50   shadow-md bg-white ">
            <div className="navbar w-[90%] mx-auto">
                <div className="flex items-center py-2 justify-between">
                    {/*  : Start Div : */}
                    <div className="flex items-center justify-center">
                        <Sheet>
                            <SheetTrigger>
                                <div className="flex items-center justify-center">
                                    <label
                                        // onClick={() => setOpen(true)}
                                        className="btn mr-2 btn-ghost lg:hidden cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
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
                                </div>
                            </SheetTrigger>
                            <SheetContent side={'left'} className="w-[60%]">
                                {/* <div
                                    className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0 transform ${
                                        open
                                            ? 'translate-x-0 transition-transform ease-in-out duration-300'
                                            : 'translate-x-full transition-transform ease-in-out duration-300'
                                    } md:hidden`}
                                >
                                    <aside className="anime">
                                        <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll ">
                                            <div className="w-full items-center my-2 justify-between flex pr-3">
                                                <div className="ml-1">
                                                    <Link
                                                        href="/"
                                                        className="flex items-center justify-center font-semibold text-2xl"
                                                    >
                                                        <Image
                                                            src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                                                            alt=""
                                                            className="w-12 "
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <span className="font-sans font-bold text-black ml-[0.4px]">
                                                            enzilla
                                                        </span>
                                                    </Link>
                                                </div>
                                                <RxCross1
                                                    size={25}
                                                    className=" cursor-pointer"
                                                    onClick={() => setOpen(false)}
                                                />
                                            </div>

                                            <div className="my-8 w-[92%] m-auto h-[40px relative]">
                                                <input
                                                    type="search"
                                                    placeholder="Search Product..."
                                                    className="h-[40px] w-full px-2 border-[#ff9900] border-[2px] rounded-md"
                                                    value={searchTerm}
                                                    onChange={handleSearchChange}
                                                />
                                                {searchData && searchData.length !== 0 ? (
                                                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                                                        {searchData.map((i: any, index: any) => {
                                                            return (
                                                                <Link
                                                                    key={index}
                                                                    href={`/product/${i?._id}`}
                                                                >
                                                                    <div className="flex items-center">
                                                                        <Image
                                                                            src={i?.images?.[0]}
                                                                            alt="productImage"
                                                                            height={100}
                                                                            width={100}
                                                                            className="w-12 mr-2"
                                                                        />
                                                                        <h5>{i.name}</h5>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                ) : null}
                                            </div>

                                            <Navbar />
                                            <div className={` ml-4 rounded-md`}>
                                                <Link href="/shop-create">
                                                    <h1 className="text-[#fff] bg-[#ff9900] flex items-center justify-between p-2 rounded-sm">
                                                        <span className="ml-2">Become Seller</span>
                                                        <IoIosArrowForward className="ml-1" />
                                                    </h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>
                                </div> */}

                                <div className="my-8 w-[92%] m-auto h-[40px relative]">
                                    <input
                                        type="search"
                                        placeholder="Search Product..."
                                        className="h-[40px] w-full px-2 border-[#ff9900] border-[2px] rounded-md outline-none"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    {searchData && searchData.length !== 0 ? (
                                        <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                                            {searchData.map((i: any, index: any) => {
                                                return (
                                                    <Link key={index} href={`/product/${i?._id}`}>
                                                        <div className="flex items-center">
                                                            <Image
                                                                src={i?.images?.[0]}
                                                                alt="productImage"
                                                                height={100}
                                                                width={100}
                                                                className="w-12 mr-2"
                                                            />
                                                            <h5>{i.name}</h5>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    ) : null}
                                </div>

                                <Navbar />
                                <div className={` ml-4 rounded-md`}>
                                    <Link href="/shop-create">
                                        <h1 className="text-[#fff] bg-[#ff9900] flex items-center justify-center space-x-3 p-2 rounded-sm">
                                            <span className="ml-2">Become Seller</span>
                                            <IoIosArrowForward className="ml-1" />
                                        </h1>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>

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

                    {/* End Div */}
                    <div className="flex items-center justify-center space-x-4">
                        <Link href="/product/cart">
                            <div className="relative py-2">
                                <div className="top-5 absolute left-4">
                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#ff9900] p-2 text-xs text-white">
                                        {cartItems?.length}
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="file: mt-4 h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <div className="">
                            {currentUser ? (
                                <>
                                    {isLoading ? (
                                        <>
                                            <div className="w-11 h-11 animate-pulse bg-slate-400  rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"></div>
                                        </>
                                    ) : (
                                        <>
                                            {/* <label
                                                tabIndex={0}
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                <div className="w-11 rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2">
                                                    <Image
                                                        alt="user_Profile"
                                                        height={100}
                                                        width={100}
                                                        className="h-10"
                                                        src={userProfileData?.profilePicture}
                                                    />
                                                </div>
                                            </label>

                                            <ul
                                                tabIndex={0}
                                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"
                                            >
                                                <li>
                                                    <Link
                                                        href="/profile"
                                                        className="justify-between"
                                                    >
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li onClick={logout}>
                                                    <p>Logout</p>
                                                </li>
                                            </ul> */}
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Avatar className="border-green-500 cursor-pointer">
                                                        <AvatarImage
                                                            className="h-10 w-10"
                                                            src={userProfileData?.profilePicture}
                                                        />
                                                        <AvatarFallback>
                                                            {userProfileData?.name}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56">
                                                    <DropdownMenuLabel>
                                                        My Account
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuGroup>
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <Link
                                                                className="flex items-center"
                                                                href="/profile?selected_path=1"
                                                            >
                                                                <User className="mr-2 h-4 w-4" />
                                                                <span>Profile</span>
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <ShoppingBag className="mr-2 h-4 w-4" />
                                                            <span>Orders</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <BookUser className="mr-2 h-4 w-4" />
                                                            <span>Address</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuGroup>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="cursor-pointer">
                                                        <LogOut className="mr-2 h-4 w-4" />
                                                        <span
                                                            className="cursor-pointer"
                                                            onClick={() => logout()}
                                                        >
                                                            Log out
                                                        </span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Link href="/auth/login">
                                        <button className="bg-[#ff9900] p-2 rounded-sm text-white px-4">
                                            Login
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/*  small device sidebar  */}
            {/* {open && (
                <div
                    className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0 transform ${
                        open
                            ? 'translate-x-0 transition-transform ease-in-out duration-300'
                            : 'translate-x-full transition-transform ease-in-out duration-300'
                    } md:hidden`}
                >
                    <aside className="anime">
                        <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll ">
                            <div className="w-full items-center my-2 justify-between flex pr-3">
                                <div className="ml-1">
                                    <Link
                                        href="/"
                                        className="flex items-center justify-center font-semibold text-2xl"
                                    >
                                        <Image
                                            src="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
                                            alt=""
                                            className="w-12 "
                                            width={100}
                                            height={100}
                                        />
                                        <span className="font-sans font-bold text-black ml-[0.4px]">
                                            enzilla
                                        </span>
                                    </Link>
                                </div>
                                <RxCross1
                                    size={25}
                                    className=" cursor-pointer"
                                    onClick={() => setOpen(false)}
                                />
                            </div>

                            <div className="my-8 w-[92%] m-auto h-[40px relative]">
                                <input
                                    type="search"
                                    placeholder="Search Product..."
                                    className="h-[40px] w-full px-2 border-[#ff9900] border-[2px] rounded-md"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                {searchData && searchData.length !== 0 ? (
                                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                                        {searchData.map((i: any, index: any) => {
                                            return (
                                                <Link key={index} href={`/product/${i?._id}`}>
                                                    <div className="flex items-center">
                                                        <Image
                                                            src={i?.images?.[0]}
                                                            alt="productImage"
                                                            height={100}
                                                            width={100}
                                                            className="w-12 mr-2"
                                                        />
                                                        <h5>{i.name}</h5>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ) : null}
                            </div>

                            <Navbar />
                            <div className={` ml-4 rounded-md`}>
                                <Link href="/shop-create">
                                    <h1 className="text-[#fff] bg-[#ff9900] flex items-center justify-between p-2 rounded-sm">
                                        <span className="ml-2">Become Seller</span>
                                        <IoIosArrowForward className="ml-1" />
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            )} */}
        </div>
    );
};

export default NewNavbar;
