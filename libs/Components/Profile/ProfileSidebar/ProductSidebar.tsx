import { useAuth } from '@/libs/Context/AuthProvider';
import React from 'react';
import { AiOutlineLogin, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlinePassword, MdOutlineTrackChanges } from 'react-icons/md';
import { TbAddressBook } from 'react-icons/tb';
import { RxPerson } from 'react-icons/rx';
import { useRouter } from 'next/router';

const ProfileSideBar = ({ setActive, active }: any) => {
    const { logout } = useAuth();
    const router = useRouter();

    const logoutHandler = () => {
        logout();
    };
    return (
        <div className="w-full bg-white text-black rounded-[10px] p-4 pt-8 shadow-md">
            <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(1)}
            >
                <RxPerson size={20} color={active === 1 ? 'red' : 'black'} />
                <span
                    className={`pl-3 ${
                        active === 1 ? 'text-[red]' : 'text-[black]'
                    } md:block hidden`}
                >
                    Profile
                </span>
            </div>
            <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(2)}
            >
                <HiOutlineShoppingBag size={20} color={active === 2 ? 'red' : ''} />
                <span className={`pl-3 ${active === 2 ? 'text-[red]' : ''} md:block hidden`}>
                    Orders
                </span>
            </div>
            {/* <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(3)}
            >
                <HiOutlineReceiptRefund size={20} color={active === 3 ? 'red' : ''} />
                <span className={`pl-3 ${active === 3 ? 'text-[red]' : ''} md:block hidden`}>
                    Refunds
                </span>
            </div> */}

            <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(4) || router.push('/inbox')}
            >
                <AiOutlineMessage size={20} color={active === 4 ? 'red' : ''} />
                <span className={`pl-3 ${active === 4 ? 'text-[red]' : ''} md:block hidden`}>
                    Inbox
                </span>
            </div>

            <div
                className="flex items-center cursor-pointer w-full mb-8 "
                onClick={() => setActive(5)}
            >
                <MdOutlineTrackChanges size={20} color={active === 5 ? 'red' : ''} />
                <span className={`pl-3 ${active === 5 ? 'text-[red]' : ''} md:block hidden`}>
                    Track Order
                </span>
            </div>

            <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(6)}
            >
                <MdOutlinePassword size={20} color={active === 6 ? 'red' : ''} />
                <span className={`pl-3 ${active === 6 ? 'text-[red]' : ''} md:block hidden`}>
                    Change Password
                </span>
            </div>

            <div
                className="flex items-center cursor-pointer w-full mb-8"
                onClick={() => setActive(7)}
            >
                <TbAddressBook size={20} color={active === 7 ? 'red' : ''} />
                <span className={`pl-3 ${active === 7 ? 'text-[red]' : ''} md:block hidden`}>
                    Address
                </span>
            </div>

            <div
                className="single_item flex items-center cursor-pointer w-full mb-8"
                onClick={logoutHandler}
            >
                <AiOutlineLogin size={20} color={active === 8 ? 'red' : ''} />
                <span className={`pl-3 ${active === 8 ? 'text-[red]' : ''} md:block hidden`}>
                    Log out
                </span>
            </div>
        </div>
    );
};

export default ProfileSideBar;
