import { getShopOrders } from '@/libs/Api';
import DashboardHeader from '@/libs/Components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/libs/Components/Dashboard/DashboardSidebar';
import { useSeller } from '@/libs/Context/sellerProvider';
import styles from '@/styles/styles';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { MdBorderClear } from 'react-icons/md';

const DashLayout = () => {
    const { currentSeller, allProducts } = useSeller();
    const availableBalance = currentSeller?.availableBalance?.toFixed(2);
    const totalProduct = allProducts?.filter((e: any) => e?.shopId === currentSeller?._id);

    const { data } = useQuery({
        queryKey: ['orders', currentSeller],
        queryFn: async () => {
            const data = await getShopOrders(currentSeller?._id);
            return data?.data;
        }
    });

    return (
        <div>
            {/* Head Section */}
            <Head>
                <title>{currentSeller?.name}&apos;Dashboard</title>
                <meta name="description" content={currentSeller?.description} />
                <meta property="og:title" content={currentSeller?.name} />
                <meta property="og:description" content={currentSeller?.description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={currentSeller?.shopProfile} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={currentSeller?.name} />
                <meta property="twitter:description" content={currentSeller?.description} />
                <meta property="twitter:image" content={currentSeller?.shopProfile} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@menzilla" />
                <meta name="twitter:creator" content="@menzilla" />
            </Head>
            <DashboardHeader />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-2">
                    <DashboardSidebar active={1} />
                </div>
                <div className="w-full flex flex-col mt-10 col-span-10">
                    {/* {children} */}
                    {/* <AllOrders /> */}

                    <div className="w-full p-8">
                        <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
                        <div className="w-full block md:flex items-center justify-between">
                            <div className="w-full mb-4 md:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                                <div className="flex items-center">
                                    <AiOutlineMoneyCollect
                                        size={30}
                                        className="mr-2"
                                        fill="#00000085"
                                    />
                                    <h3
                                        className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                                    >
                                        Account Balance{' '}
                                        <span className="text-[16px]">
                                            (with 10% service charge)
                                        </span>
                                    </h3>
                                </div>
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                                    ${availableBalance}
                                </h5>
                                <Link href="/dashboard-withdraw-money">
                                    <h5 className="pt-4 pl-[2] text-[#077f9c]">Withdraw Money</h5>
                                </Link>
                            </div>

                            <div className="w-full mb-4 md:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                                <div className="flex items-center">
                                    <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                                    <h3
                                        className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                                    >
                                        All Orders
                                    </h3>
                                </div>
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                                    {data && data?.length}
                                </h5>
                                <Link href="/dashboard-orders">
                                    <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
                                </Link>
                            </div>

                            <div className="w-full mb-4 md:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                                <div className="flex items-center">
                                    <AiOutlineMoneyCollect
                                        size={30}
                                        className="mr-2"
                                        fill="#00000085"
                                    />
                                    <h3
                                        className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                                    >
                                        All Products
                                    </h3>
                                </div>
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                                    {totalProduct && totalProduct?.length}
                                </h5>
                                <Link href="/dashboard/products">
                                    <h5 className="pt-4 pl-2 text-[#077f9c]">View Products</h5>
                                </Link>
                            </div>
                        </div>
                        <br />
                        <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
                        {/* <div className="w-full min-h-[45vh] bg-white rounded">
                            <DataGrid
                                rows={row}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashLayout;
