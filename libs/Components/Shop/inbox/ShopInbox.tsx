import React from 'react';
import MessageList from './MessageList';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useQuery } from '@tanstack/react-query';
import { getSellerConversations } from '@/libs/Api';
import { toast } from 'react-hot-toast';

const ShopInbox = () => {
    const { currentSeller } = useSeller();

    const { data: conversations, isLoading } = useQuery({
        queryKey: ['messageList', currentSeller],
        queryFn: async () => {
            const response = await getSellerConversations(currentSeller?._id);
            if (response.status === 201) {
                return response.data;
            } else {
                toast.error('Error getting messages list');
            }
        }
    });
    return (
        <div>
            <div className="w-[95%] m-5 h-[83vh] overflow-y-scroll shadow-md rounded-md">
                <h1 className="font-semibold ml-5 text-xl">
                    All Messages <span className="text-[#ff9900] text-2xl">.</span>
                </h1>

                {/* All Message List */}
                <div>
                    {conversations &&
                        conversations?.map((item: any, index: number) => {
                            return <MessageList key={index} item={item} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default ShopInbox;
