import styles from '@/styles/styles';
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineSend } from 'react-icons/ai';
import { TfiGallery } from 'react-icons/tfi';

const SellerInbox = ({ setOpen }: any) => {
    return (
        <div className="w-full flex flex-col min-h-full justify-between">
            {/* message header */}
            <div className="w-full flex p-1 items-center justify-between bg-slate-100">
                <div className="flex">
                    <Image
                        src={
                            'https://res.cloudinary.com/menzilla/image/upload/v1688536977/Menzilla/User-profile/ttw93z7t7pkw3azcfpx3.jpg'
                        }
                        height={500}
                        width={500}
                        alt="user_Profile"
                        className="h-16 w-16 rounded-full object-contain "
                    />
                    <div className="pl-3">
                        <h1 className="text-base font-[600]">Sukanta Das</h1>
                        <h1>{'Active Now'}</h1>
                    </div>
                </div>
                <AiOutlineArrowRight
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                />
            </div>

            {/* Message Group  */}
            <div className="bg-red-100  px-3 h-[60vh] py-3 overflow-y-scroll">
                <div className="w-max h-min p-2 rounded bg-gray-300">
                    <p>Hello World !</p>
                </div>
            </div>

            {/* send message input */}
            <form
                className="p-3 relative w-full flex justify-between items-center"
                // onSubmit={sendMessageHandler}
            >
                <div className="w-[30px]">
                    <input
                        type="file"
                        name=""
                        id="image"
                        className="hidden"
                        // onChange={handleImageUpload}
                    />
                    <label htmlFor="image">
                        <TfiGallery className="cursor-pointer" size={20} />
                    </label>
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        required
                        placeholder="Enter your message..."
                        // value={newMessage}
                        // onChange={(e) => setNewMessage(e.target.value)}
                        className={`${styles.input}`}
                    />
                    <input type="submit" value="Send" className="hidden" id="send" />
                    <label htmlFor="send">
                        <AiOutlineSend
                            size={20}
                            className="absolute right-4 top-5 cursor-pointer"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default SellerInbox;
