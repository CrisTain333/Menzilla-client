import styles from '@/styles/styles';
import Image from 'next/image';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
const PaymentMethod = () => {
    return (
        <div className="shadow-md w-[90%] mx-auto">
            <div className="w-full px-5 pb-4">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
                        Payment Methods
                    </h1>
                    <div className={`${styles.button} !rounded-md`}>
                        <span className="text-[#fff]">Add New</span>
                    </div>
                </div>
                <br />
                <div className="w-full bg-white h-min md:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                    <div className="flex items-center">
                        <Image
                            height={500}
                            width={500}
                            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
                            className="h-14 w-14"
                            alt=""
                        />
                        <h5 className="pl-5 font-[600] text-[12px] md:text-[unset]">Cristain</h5>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h6 className="text-[12px] md:text-[unset]">1234 **** *** ****</h6>
                        <h5 className="pl-6 text-[12px] md:text-[unset]">08/2022</h5>
                    </div>
                    <div className="min-w-[10%] flex items-center justify-between pl-8">
                        <AiOutlineDelete size={25} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
