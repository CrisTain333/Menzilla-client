import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { useSeller } from '@/libs/Context/sellerProvider';
import Link from 'next/link';
import { deleteShopProduct } from '@/libs/Api';
import { toast } from 'react-hot-toast';

const AllProducts = () => {
    const { currentSeller, products, getSellerProducts, totalPages } = useSeller();
    const [currentPage, setCurrentPage] = useState(1);

    // const { products, isLoading } = useSelector((state) => state.products);

    const handleProductDelete = async (id: string) => {
        const response = await deleteShopProduct(id);
        if (response?.status !== 200) {
            toast.error('Product Not deleted');
            return;
        }
        toast.success(response?.message);
        getSellerProducts(currentSeller?._id, currentPage);
    };

    useEffect(() => {
        getSellerProducts(currentSeller?._id, currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="overflow-x-auto h-[25rem] w-[95%] mx-auto">
                <table className="table w-full">
                    <colgroup>
                        <col className="w-32" />
                        <col className="w-32" />
                        <col className="w-32" />
                        <col className="w-32" />
                        <col className="w-32" />
                        <col className="w-32" />
                        <col className="w-32" />
                    </colgroup>
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="w-[20%]">Name</th>
                            <th className="w-[20%]">Price</th>
                            <th className="w-[20%]">Stock</th>
                            <th className="w-[20%]">Sold</th>
                            <th>preview</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product: any, index: any) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{product?.name?.slice(0, 40)}. . .</td>
                                        <td>${product?.discountPrice}</td>
                                        <td>{product?.stock}</td>
                                        <td>10</td>
                                        <td>
                                            {' '}
                                            <Link href={`/product/${product?.name}`}>
                                                <AiOutlineEye size={20} />
                                            </Link>
                                        </td>
                                        <td>
                                            <div
                                                onClick={() => handleProductDelete(product?._id)}
                                                className="cursor-pointer"
                                            >
                                                <AiOutlineDelete size={20} color="red" />
                                            </div>{' '}
                                        </td>
                                    </tr>
                                );
                            })}
                        {/* row 1 */}
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
        </>
    );
};

export default AllProducts;
