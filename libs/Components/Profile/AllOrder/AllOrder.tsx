import { getUserOrder } from '@/libs/Api';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
const AllOrders = () => {
    const { currentUser } = useAuth();

    const { data } = useQuery({
        queryKey: ['orders', currentUser],
        queryFn: async () => {
            const data = await getUserOrder(currentUser?._id);
            return data?.data;
        }
    });

    return (
        <div className="shadow-md w-[90%] mx-auto">
            <div className="pl-5 pr-2 pt-1 pb-5">
                <div className="overflow-x-auto scrollbar-hide">
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
                            {data &&
                                data?.map((e: any, i: any) => {
                                    return (
                                        <tr key={i}>
                                            <th>{e?._id}</th>
                                            <td> {e?.status}</td>
                                            <td>{e?.cart?.length}</td>
                                            <td>{'US$ ' + e?.totalPrice}</td>
                                            <td>
                                                <Link href={`/order/${e?._id}`}>
                                                    <button className="text-blue-500 border p-2">
                                                        <AiOutlineArrowRight size={20} />
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
export default AllOrders;
