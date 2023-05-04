import { AiOutlineDelete } from 'react-icons/ai';
import React from 'react';
import styles from '@/styles/styles';

const Address = () => {
    return (
        <div className="shadow-md w-[90%] mx-auto">
            <div className="w-full px-5 pb-5">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">My Addresses</h1>
                    <div className={`${styles.button} !rounded-md`}>
                        <span className="text-[#fff]">Add New</span>
                    </div>
                </div>
                <br />
                <div className="w-full bg-white h-min md:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                    <div className="flex items-center">
                        <h5 className="pl-5 font-[600]">Default</h5>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h6 className="text-[12px] md:text-[unset]">
                            494 Erdman Pasaage, New Zoietown, Paraguay
                        </h6>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h6 className="text-[12px] md:text-[unset]">(213) 840-9416</h6>
                    </div>
                    <div className="min-w-[10%] flex items-center justify-between pl-8">
                        <AiOutlineDelete size={25} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
