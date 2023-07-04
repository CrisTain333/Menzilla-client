import Link from 'next/link';
import React from 'react';
import { MdOutlineTrackChanges } from 'react-icons/md';

const TrackOrder = () => {
    const orders = [
        {
            _id: '7463hvbfbhfbrtr28820221',
            orderItems: [
                {
                    name: 'Iphone 14 pro max'
                }
            ],
            totalPrice: 120,
            orderStatus: 'Processing'
        }
    ];

    return (
        <div className="shadow-md w-[90%] mx-auto">
            <div className="pl-5 pr-2 pt-1 pb-5">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className="lowercase">
                                <th>OrderId</th>
                                <th>status</th>
                                <th>itemsQty</th>
                                <th>total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders?.map((e: any, i: any) => {
                                    return (
                                        <tr key={i}>
                                            <th>{e?._id}</th>
                                            <td> {e?.orderStatus}</td>
                                            <td>{'US$ ' + e?.totalPrice}</td>
                                            <td>{e?.orderItems?.length}</td>
                                            <td>
                                                <Link href={`/order/track-order?orderId=${e?._id}`}>
                                                    <button className="text-blue-500 border p-2">
                                                        <MdOutlineTrackChanges size={20} />
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;
