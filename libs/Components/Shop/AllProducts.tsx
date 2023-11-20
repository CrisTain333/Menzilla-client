/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { useSeller } from '@/libs/Context/sellerProvider';
import Link from 'next/link';
import { deleteShopProduct } from '@/libs/Api';
import { toast } from 'react-hot-toast';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

const AllProducts = () => {
    const { currentSeller, products, getSellerProducts, totalPages } = useSeller();
    const [currentPage, setCurrentPage] = useState(1);

    // const [filterText, setFilterText] = useState('');
    // const [filteredProducts, setFilteredProducts] = useState(products);
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

    useEffect(() => {
        getSellerProducts(currentSeller?._id, currentPage);
    }, [currentPage]);

    // useEffect(() => {
    //     if (filterText === '') {
    //         setFilteredProducts(products);
    //     } else {
    //         const filtered = products.filter((product: any) =>
    //             product.name.toLowerCase().includes(filterText.toLowerCase())
    //         );
    //         setFilteredProducts(filtered);
    //     }
    // }, [filterText, products]);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // const handleSearch = (value: any) => {
    //     if (value === '') {
    //         setFilterData(products);
    //     }
    //     const filterValue = products?.find((product: any) =>
    //         product.name.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilterData(filterValue);
    // };

    return (
        <>
            <Table>
                <TableCaption>A list of your products</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Sold</TableHead>
                        <TableHead>Preview</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products &&
                        products?.map((product: any, index: any) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{product?.name?.slice(0, 40)}. . .</TableCell>
                                    <TableCell>${product?.discountPrice}</TableCell>
                                    <TableCell>{product?.stock}</TableCell>
                                    <TableCell>{product?.sold_out}</TableCell>
                                    <TableCell>
                                        {' '}
                                        <Link href={`/product/${product?.name}`}>
                                            <AiOutlineEye size={20} />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div
                                            onClick={() => handleProductDelete(product?._id)}
                                            className="cursor-pointer"
                                        >
                                            <AiOutlineDelete size={20} color="red" />
                                        </div>{' '}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>

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
