// import { Button } from '@material-ui/core';
// import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllProductsShop } from '../../redux/actions/product';
// import { deleteProduct } from '../../redux/actions/product';
// import Loader from '../Layout/Loader';
import { useSeller } from '@/libs/Context/sellerProvider';
import Link from 'next/link';
import SmallLoader from '../SmallLoader/SmallLoader';
import products from '@/pages/dashboard/products';
import { productData } from '@/libs/common/constant/Data';
import { Button } from '@mui/material';

const AllProducts = () => {
    // const { products, isLoading } = useSelector((state) => state.products);
    const { currentSeller, isLoading, products } = useSeller();

    return (
        <>
            <div className="overflow-x-auto">
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllProducts;
