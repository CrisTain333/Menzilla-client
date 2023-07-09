import Image from 'next/image';
import React from 'react';
import MessageList from './MessageList';

const ShopInbox = () => {
    return (
        <div>
            <div className="w-[95%] m-5 h-[83vh] overflow-y-scroll shadow-md rounded-md">
                <h1 className="font-semibold ml-5 text-xl">
                    All Messages <span className="text-[#ff9900] text-2xl">.</span>
                </h1>

                {/* All Message List */}
                <MessageList />
                <MessageList />
                <MessageList />
                <MessageList />
                <MessageList />
                <MessageList />
            </div>
        </div>
    );
};

export default ShopInbox;
