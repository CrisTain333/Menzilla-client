import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MessageList = ({ item, index, setOpen }: any) => {
    const [active, setActive] = useState<any>(0);
    const router = useRouter();
    const handleClick = (id: any) => {
        setActive(index);
        setOpen(true);
        router.push(`?conversation_address=${id}`);
    };
    return (
        <div>
            <div
                className={`w-full flex py-3 p-3 ${
                    active === index ? 'bg-slate-100' : 'bg-transparent'
                } cursor-pointer`}
                onClick={() => {
                    handleClick(item?._id);
                }}
            >
                <div className="relative">
                    <Image
                        src={
                            'https://res.cloudinary.com/menzilla/image/upload/v1688536977/Menzilla/User-profile/ttw93z7t7pkw3azcfpx3.jpg'
                        }
                        height={500}
                        width={500}
                        alt="user_Profile"
                        className="h-16 w-16 rounded-full object-contain "
                    />
                    <div className="absolute h-4 w-4 rounded-full bg-green-500  bottom-1 right-0"></div>
                </div>
                <div className="pl-4">
                    <h1 className=" font-medium text-lg">Sukanta Das</h1>
                    <p className="text-[#000c]">I am Good what about .... </p>
                </div>
            </div>
        </div>
    );
};

export default MessageList;
