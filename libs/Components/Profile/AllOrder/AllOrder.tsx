import { getUserOrder } from '@/libs/Api';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
const AllOrders = () => {
    const { currentUser } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState<any>();

    const { data } = useQuery({
        queryKey: ['orders', currentUser, currentPage],
        queryFn: async () => {
            const data = await getUserOrder(currentUser?._id, currentPage);
            setCurrentPage(data?.currentPage);
            setTotalPage(data?.totalPages);
            return data?.data;
        }
    });

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }

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
                                                <Link
                                                    href={`/order/user-order-details?orderId=${
                                                        e?._id
                                                    }&productName=${
                                                        e?.cart?.product?.name
                                                    }&hdChIeoLkNNm76=${false}`}
                                                >
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

                <div className="flex justify-start space-x-1 dark:text-gray-100 my-10 ml-10">
                    {pageNumbers?.map((pageNumber, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(pageNumber)}
                            type="button"
                            title="Page 1"
                            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
                                pageNumber === currentPage && 'bg-[#ff9900] text-white'
                            }`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default AllOrders;
