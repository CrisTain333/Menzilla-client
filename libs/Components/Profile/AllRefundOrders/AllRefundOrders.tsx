import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
                            <button>
                                <AiOutlineArrowRight size={20} />
                            </button>
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
            {/* <DataGrid
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
            /> */}
        </div>
    );
};

export default AllRefundOrders;
