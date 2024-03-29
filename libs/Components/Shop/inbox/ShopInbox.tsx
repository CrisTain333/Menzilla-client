import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useQuery } from '@tanstack/react-query';
import { getSellerConversations } from '@/libs/Api';
import { toast } from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import SellerInbox from './SellerInbox';
import socketIO from 'socket.io-client';
const ENDPOINT = 'http://localhost:8000/';
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] });

const ShopInbox = () => {
    const [open, setOpen] = useState(false);
    const { currentSeller } = useSeller();
    // const [arrivalMessage, setArrivalMessage] = useState<any>(null);
    // const [currentChat, setCurrentChat] = useState<any>();
    // const [messages, setMessages] = useState<any>([]);
    // useEffect(() => {
    //     socketId.on('getMessage', (data) => {
    //         setArrivalMessage({
    //             sender: data.senderId,
    //             text: data.text,
    //             createdAt: Date.now()
    //         });
    //     });
    // }, []);

    // useEffect(() => {
    //     arrivalMessage &&
    //         currentChat?.members.includes(arrivalMessage.sender) &&
    //         setMessages((prev: any) => [...prev, arrivalMessage]);
    // }, [arrivalMessage, currentChat]);

    // const getMessage = useQuery({
    //     queryKey: ['message'],
    //     queryFn: () => {
    //         socketId.on('getMessage', (data) => {
    //             setArrivalMessage({
    //                 sender: data.senderId,
    //                 text: data.text,
    //                 createdAt: Date.now()
    //             });
    //         });
    //     }
    // });

    const { data: conversations, isLoading } = useQuery({
        queryKey: ['messageList', currentSeller, open],
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
            <div className="w-[95%] mt-3 h-[83vh] overflow-y-scroll shadow-md rounded-md">
                {!open && (
                    <>
                        <h1 className="font-semibold ml-5 text-xl">
                            All Messages <span className="text-[#ff9900] text-2xl">.</span>
                        </h1>
                    </>
                )}

                {/* All Message List */}
                <div>
                    {!open && (
                        <>
                            {isLoading ? (
                                <>
                                    {' '}
                                    <div className="flex items-center justify-center h-[50vh]">
                                        <ThreeCircles
                                            height="100"
                                            width="100"
                                            color="#ff9900"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {conversations &&
                                        conversations?.map((item: any, index: number) => {
                                            return (
                                                <MessageList
                                                    key={index}
                                                    item={item}
                                                    index={index}
                                                    setOpen={setOpen}
                                                />
                                            );
                                        })}
                                </>
                            )}
                        </>
                    )}

                    {open && (
                        <>
                            <SellerInbox setOpen={setOpen} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopInbox;
