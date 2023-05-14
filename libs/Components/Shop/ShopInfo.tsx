import { useSeller } from '@/libs/Context/sellerProvider';
import Image from 'next/image';
import React from 'react';
import { TbEdit } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';

const ShopInfo = ({ isOwner }: any) => {
    const { currentSeller, isLoading } = useSeller();
    return (
        <div>
            {isLoading ? (
                <p>Loading .... </p>
            ) : (
                <div>
                    <div className="w-full py-5">
                        <div className="w-full flex item-center justify-center">
                            <Image
                                height={500}
                                width={500}
                                src={`${currentSeller ? currentSeller?.shopProfile : ''}`}
                                alt=""
                                className="w-36 h-36 rounded-full object-cover ring-4 ring-[#ff9900] "
                            />
                        </div>
                        <h3 className="text-center py-2 text-[20px]">{currentSeller?.name}</h3>
                        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
                            {currentSeller?.description}
                        </p>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Address</h5>
                        <h4 className="text-[#000000a6]">{currentSeller?.address}</h4>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Phone Number</h5>
                        <h4 className="text-[#000000a6]">{currentSeller?.phoneNumber}</h4>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Total Products</h5>
                        <h4 className="text-[#000000a6]">10</h4>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Shop Ratings</h5>
                        <h4 className="text-[#000000b0]">4/5</h4>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Joined On</h5>
                        <h4 className="text-[#000000b0]">
                            {currentSeller?.createdAt?.slice(0, 10)}
                        </h4>
                    </div>
                    {isOwner && (
                        <div className="py-3 px-4">
                            <div
                                className={`border  text-center bg-[#ff9900] text-white rounded-md cursor-pointer flex justify-center items-center text-base py-3 font-semibold`}
                            >
                                <span className="text-white mr-1">Edit Shop</span>
                                <span>
                                    <TbEdit size={24} />
                                </span>
                            </div>
                            <div
                                className={`border  text-center bg-[#ff9900] text-white rounded-md cursor-pointer flex justify-center items-center text-base font-semibold py-3 my-5`}
                                // onClick={logoutHandler}
                            >
                                <span className="text-white mr-1">Log Out</span>
                                <span>
                                    <BiLogIn size={24} />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShopInfo;
