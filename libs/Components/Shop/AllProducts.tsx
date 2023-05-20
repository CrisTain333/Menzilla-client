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
    const { currentSeller, isLoading } = useSeller();

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllProductsShop(currentSeller._id));
    // }, [dispatch]);

    const handleDelete = (id: any) => {
        // dispatch(deleteProduct(id));
        window.location.reload();
    };

    const columns: any = [
        { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 180,
            flex: 1.4
        },
        {
            field: 'price',
            headerName: 'Price',
            minWidth: 100,
            flex: 0.6
        },
        {
            field: 'Stock',
            headerName: 'Stock',
            type: 'number',
            minWidth: 80,
            flex: 0.5
        },

        {
            field: 'sold',
            headerName: 'Sold out',
            type: 'number',
            minWidth: 130,
            flex: 0.6
        },
        {
            field: 'Preview',
            flex: 0.8,
            minWidth: 100,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params: any) => {
                const d = params.row.name;
                // const product_name = d.replace(/\s+/g, '-');
                return (
                    <>
                        <Link href={`/product/${d}`}>
                            <Button>
                                <AiOutlineEye size={20} />
                            </Button>
                        </Link>
                    </>
                );
            }
        },
        {
            field: 'Delete',
            flex: 0.8,
            minWidth: 120,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button onClick={() => handleDelete(params.id)}>
                            <AiOutlineDelete size={20} />
                        </Button>
                    </>
                );
            }
        }
    ];

    const row: any = [];

    productData &&
        productData?.forEach((item: any) => {
            row.push({
                id: item?.name,
                name: item?.name,
                price: 'US$ ' + item?.discountPrice,
                Stock: item?.stock,
                sold: 10
            });
        });

    return (
        <>
            {isLoading ? (
                <SmallLoader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white">
                    <DataGrid
                        rows={row}
                        columns={columns}
                        // pageSizeOptions={10}
                        pageSizeOptions={[6]}
                        // pageSize={10}
                        // disableSelectionOnClick
                        autoHeight
                    />
                </div>
            )}
        </>
    );
};

export default AllProducts;
