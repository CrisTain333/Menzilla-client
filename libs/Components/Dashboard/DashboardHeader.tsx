import React from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { useSeller } from '@/libs/Context/sellerProvider';
import Link from 'next/link';
import Image from 'next/image';

const DashboardHeader = () => {
    const { currentSeller } = useSeller();
    return (
        <div>
            <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
                <div>
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
                        <span className="font-sans font-bold text-black ml-[0.4px]">enzilla</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-4">
                        <Link href="/dashboard/cupouns" className="md:block hidden">
                            <AiOutlineGift
                                color="#555"
                                size={30}
                                className="mx-5 cursor-pointer text-black"
                            />
                        </Link>
                        <Link href="/dashboard-events" className="md:block hidden">
                            <MdOutlineLocalOffer
                                color="#555"
                                size={30}
                                className="mx-5 cursor-pointer text-black"
                            />
                        </Link>
                        <Link href="/dashboard-products" className="md:block hidden">
                            <FiShoppingBag
                                color="#555"
                                size={30}
                                className="mx-5 cursor-pointer text-black"
                            />
                        </Link>
                        <Link href="/dashboard-orders" className="md:block hidden">
                            <FiPackage
                                color="#555"
                                size={30}
                                className="mx-5 cursor-pointer  text-black"
                            />
                        </Link>
                        <Link href="/dashboard-messages" className="md:block hidden">
                            <BsChatLeftDots
                                color="#555"
                                size={30}
                                className="mx-5 cursor-pointer text-black"
                            />
                        </Link>
                        <Link href={`/shop/${currentSeller?._id}`}>
                            <Image
                                height={500}
                                width={500}
                                src={`${currentSeller ? currentSeller?.shopProfile : ''}`}
                                alt=""
                                className="w-12 h-12 rounded-full object-cover ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
