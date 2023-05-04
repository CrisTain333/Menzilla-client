import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { useAuth } from '@/libs/Context/AuthProvider';
import styles from '@/styles/styles';
import Link from 'next/link';
import Image from 'next/image';

const ProfileContent = ({ active }: any) => {
    const { currentUser } = useAuth();

    const [name, setName] = useState(currentUser && currentUser?.name);
    const [email, setEmail] = useState(currentUser && currentUser?.email);
    const [phoneNumber, setPhoneNumber] = useState();
    const [zipCode, setZipCode] = useState();
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="w-[90%] mx-auto ">
            {/* profile */}
            {active === 1 && (
                <>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <Image
                                src={`${currentUser?.profilePicture || ''}`}
                                className="w-36 h-36 rounded-full object-cover border-[5px] border-[#ff9900]"
                                alt="profilePicture"
                                height={500}
                                width={500}
                            />
                            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                <AiOutlineCamera />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="w-full px-5">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block font-semibold pb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Email Address</label>
                                    <input
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-1 md:mb-0`}
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Phone Number</label>
                                    <input
                                        type="number"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        required
                                        value={phoneNumber}
                                        onChange={(e: any) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Zip Code</label>
                                    <input
                                        type="number"
                                        className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                        required
                                        value={zipCode}
                                        onChange={(e: any) => setZipCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:flex block pb-3">
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Address 1</label>
                                    <input
                                        type="address"
                                        className={`${styles.input} !w-[95%]`}
                                        required
                                        value={address1}
                                        onChange={(e) => setAddress1(e.target.value)}
                                    />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label className="block pb-2">Address 2</label>
                                    <input
                                        type="address"
                                        className={`${styles.input} !w-[95%]`}
                                        required
                                        value={address2}
                                        onChange={(e) => setAddress2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <input
                                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                required
                                value="Update"
                                type="submit"
                            />
                        </form>
                    </div>
                </>
            )}

            {/* order */}
            {active === 2 && (
                <div>
                    <AllOrders />
                </div>
            )}

            {/* Refund */}
            {active === 3 && (
                <div>
                    <AllRefundOrders />
                </div>
            )}

            {/* Track order */}
            {active === 5 && (
                <div>
                    <TrackOrder />
                </div>
            )}

            {/* Track order */}
            {active === 6 && (
                <div>
                    <PaymentMethod />
                </div>
            )}

            {/*  user Address */}
            {active === 7 && (
                <div>
                    <Address />
                </div>
            )}
        </div>
    );
};

const AllOrders = () => {
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

    const columns: any[] = [
        { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },

        {
            field: 'status',
            headerName: 'Status',
            minWidth: 130,
            flex: 0.7
        },
        {
            field: 'itemsQty',
            headerName: 'Items Qty',
            type: 'number',
            minWidth: 130,
            flex: 0.7
        },

        {
            field: 'total',
            headerName: 'Total',
            type: 'number',
            minWidth: 130,
            flex: 0.8
        },

        {
            field: ' ',
            flex: 1,
            minWidth: 150,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link href={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            }
        }
    ];

    const row: any[] = [];

    orders &&
        orders.forEach((item) => {
            row.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                total: 'US$ ' + item.totalPrice,
                status: item.orderStatus
            });
        });

    return (
        <div className="pl-5 pr-2 pt-1">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>status</th>
                            <th>itemsQty</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const AllRefundOrders = () => {
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

    const columns = [
        { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },

        {
            field: 'status',
            headerName: 'Status',
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params: any) => {
                return params.getValue(params.id, 'status') === 'Delivered'
                    ? 'greenColor'
                    : 'redColor';
            }
        },
        {
            field: 'itemsQty',
            headerName: 'Items Qty',
            type: 'number',
            minWidth: 130,
            flex: 0.7
        },

        {
            field: 'total',
            headerName: 'Total',
            type: 'number',
            minWidth: 130,
            flex: 0.8
        },

        {
            field: ' ',
            flex: 1,
            minWidth: 150,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link href={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            }
        }
    ];

    const row: any[] = [];

    orders &&
        orders.forEach((item) => {
            row.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                total: 'US$ ' + item.totalPrice,
                status: item.orderStatus
            });
        });

    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
            />
        </div>
    );
};

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

    const columns = [
        { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params: any) => {
                return params.getValue(params.id, 'status') === 'Delivered'
                    ? 'greenColor'
                    : 'redColor';
            }
        },
        {
            field: 'itemsQty',
            headerName: 'Items Qty',
            type: 'number',
            minWidth: 130,
            flex: 0.7
        },

        {
            field: 'total',
            headerName: 'Total',
            type: 'number',
            minWidth: 130,
            flex: 0.8
        },
        {
            field: ' ',
            flex: 1,
            minWidth: 130,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link href={`/order/${params.id}`}>
                            <Button>
                                <MdOutlineTrackChanges size={20} />
                            </Button>
                        </Link>
                    </>
                );
            }
        }
    ];

    const row: any[] = [];

    orders &&
        orders.forEach((item) => {
            row.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                total: 'US$ ' + item.totalPrice,
                status: item.orderStatus
            });
        });

    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
            />
        </div>
    );
};

const PaymentMethod = () => {
    return (
        <div className="w-full px-5">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">Payment Methods</h1>
                <div className={`${styles.button} !rounded-md`}>
                    <span className="text-[#fff]">Add New</span>
                </div>
            </div>
            <br />
            <div className="w-full bg-white h-min md:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                <div className="flex items-center">
                    <img
                        src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
                        alt=""
                    />
                    <h5 className="pl-5 font-[600] text-[12px] md:text-[unset]">Shahriar Sajeeb</h5>
                </div>
                <div className="pl-8 flex items-center">
                    <h6 className="text-[12px] md:text-[unset]">1234 **** *** ****</h6>
                    <h5 className="pl-6 text-[12px] md:text-[unset]">08/2022</h5>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete size={25} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

const Address = () => {
    return (
        <div className="w-full px-5">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">My Addresses</h1>
                <div className={`${styles.button} !rounded-md`}>
                    <span className="text-[#fff]">Add New</span>
                </div>
            </div>
            <br />
            <div className="w-full bg-white h-min md:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                <div className="flex items-center">
                    <h5 className="pl-5 font-[600]">Default</h5>
                </div>
                <div className="pl-8 flex items-center">
                    <h6 className="text-[12px] md:text-[unset]">
                        494 Erdman Pasaage, New Zoietown, Paraguay
                    </h6>
                </div>
                <div className="pl-8 flex items-center">
                    <h6 className="text-[12px] md:text-[unset]">(213) 840-9416</h6>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete size={25} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
export default ProfileContent;