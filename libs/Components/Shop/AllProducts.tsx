import React from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { useSeller } from '@/libs/Context/sellerProvider';
import Link from 'next/link';
import { deleteShopProduct } from '@/libs/Api';
import { toast } from 'react-hot-toast';

const AllProducts = () => {
    // const { products, isLoading } = useSelector((state) => state.products);
    const { currentSeller, products, getSellerProducts } = useSeller();

    const handleProductDelete = async (id: string) => {
        const response = await deleteShopProduct(id);
        if (response?.status !== 200) {
            toast.error('Product Not deleted');
            return;
        }
        toast.success(response?.message);
        getSellerProducts(currentSeller?._id);
    };

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
        </>
    );
};

export default AllProducts;
