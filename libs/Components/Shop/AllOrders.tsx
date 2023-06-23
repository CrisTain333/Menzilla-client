import { getShopOrders } from '@/libs/Api';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AllOrders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState<any>();
    const { currentSeller } = useSeller();

    const { data } = useQuery({
        queryKey: ['orders', currentSeller, currentPage],
        queryFn: async () => {
            const data = await getShopOrders(currentSeller?._id, currentPage);
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
        <div>
            <div className="overflow-x-auto h-[25rem] w-[95%] scrollbar-hide">
                <table className="table  w-full">
                    <colgroup>
                        <col className="w-20" />
                        <col className="w-20" />
                        <col className="w-20" />
                        <col className="w-20" />
                        <col className="w-20" />
                    </colgroup>
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
                                            <Link href={`/order/order-details?orderId=${e?._id}`}>
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
    );
};

export default AllOrders;
