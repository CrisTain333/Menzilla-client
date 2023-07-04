import React from 'react';
import { AiOutlineFolderAdd, AiOutlineGift } from 'react-icons/ai';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
// import { VscNewFile } from 'react-icons/vsc';
import { CiMoneyBill, CiSettings } from 'react-icons/ci';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import Link from 'next/link';

const DashboardSidebar = ({ active }: any) => {
    return (
        <div>
            <div className="w-full h-[87vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
                {/* single item */}
                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard" className="w-full flex items-center">
                        <RxDashboard size={28} color={`${active === 1 ? '#ff9900' : '#000000'}`} />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 1 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Dashboard
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard/all-orders" className="w-full flex items-center">
                        <FiShoppingBag
                            size={28}
                            color={`${active === 2 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 2 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            All Orders
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard/products" className="w-full flex items-center">
                        <FiPackage size={28} color={`${active === 3 ? '#ff9900' : '#000000'}`} />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 3 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            All Products
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard/create-product" className="w-full flex items-center">
                        <AiOutlineFolderAdd
                            size={28}
                            color={`${active === 4 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 4 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Create Product
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-events" className="w-full flex items-center">
                        <MdOutlineLocalOffer
                            size={28}
                            color={`${active === 5 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 5 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            All Events
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-withdraw-money" className="w-full flex items-center">
                        <CiMoneyBill size={28} color={`${active === 7 ? '#ff9900' : '#000000'}`} />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 7 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Withdraw Money
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-messages" className="w-full flex items-center">
                        <BiMessageSquareDetail
                            size={28}
                            color={`${active === 8 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 8 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Shop Inbox
                        </h5>
                    </Link>
                </div>

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-coupouns" className="w-full flex items-center">
                        <AiOutlineGift
                            size={28}
                            color={`${active === 9 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 9 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Discount Codes
                        </h5>
                    </Link>
                </div>

                {/* <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-refunds" className="w-full flex items-center">
                        <HiOutlineReceiptRefund
                            size={28}
                            color={`${active === 10 ? '#ff9900' : '#000000'}`}
                        />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 10 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Refunds
                        </h5>
                    </Link>
                </div> */}

                <div className="w-full flex items-center p-4">
                    <Link href="/dashboard-settings" className="w-full flex items-center">
                        <CiSettings size={28} color={`${active === 11 ? '#ff9900' : '#000000'}`} />
                        <h5
                            className={`hidden md:block pl-2 text-[18px] font-semibold ${
                                active === 11 ? 'text-[#ff9900]' : 'text-black'
                            }`}
                        >
                            Settings
                        </h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
