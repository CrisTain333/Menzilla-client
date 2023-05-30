import { getSellerOnly, getShopPreviewProduct } from '@/libs/Api';
import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { ThreeCircles } from 'react-loader-spinner';

const ShopPreview = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sellerInfo, setSellerInfo] = useState<any>();
    const [products, setProducts] = useState([]);
    const [active, setActive] = React.useState(1);

    const router = useRouter();
    const shopId = router?.query?.shopId;

    const getData = async () => {
        setIsLoading(true);
        const seller = await getSellerOnly(shopId);
        if (seller) {
            const shopProducts = await getShopPreviewProduct(shopId as string);
            setProducts(shopProducts?.data);
            setIsLoading(false);
        }
        setSellerInfo(seller?.seller);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shopId]);

    return (
        <div>
            <div>
                <div className="px-10 mx-auto">
                    <div className="w-full flex py-10 justify-between">
                        <div className="w-[25%] bg-slate-50 rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
                            {/* <ShopInfo isOwner={true} /> */}
                            <div>
                                {isLoading ? (
                                    <ThreeCircles
                                        height="60"
                                        width="60"
                                        color="#ff9900"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel="three-circles-rotating"
                                        outerCircleColor=""
                                        innerCircleColor=""
                                        middleCircleColor=""
                                    />
                                ) : (
                                    <div>
                                        <div className="w-full py-5">
                                            <div className="w-full flex item-center justify-center">
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src={`${
                                                        sellerInfo ? sellerInfo?.shopProfile : ''
                                                    }`}
                                                    alt=""
                                                    className="w-36 h-36 rounded-full object-cover ring-4 ring-[#ff9900] "
                                                />
                                            </div>
                                            <h3 className="text-center mt-5 text-4xl font-mono font-semibold">
                                                {sellerInfo?.name}
                                            </h3>
                                            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
                                                {sellerInfo?.description}
                                            </p>
                                        </div>
                                        <div className="p-3">
                                            <h5 className="text-lg font-semibold">Address</h5>
                                            <h4 className="text-[#000000a6] font-mono font-semibold">
                                                {sellerInfo?.address}
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h5 className="text-lg font-semibold">Phone Number</h5>
                                            <h4 className="text-[#000000a6] text-sm font-mono font-semibold">
                                                {sellerInfo?.phoneNumber}
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h5 className="text-lg font-semibold">
                                                Total Products
                                            </h5>
                                            <h4 className="text-[#000000a6] text-sm font-mono font-semibold">
                                                {products?.length}
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h5 className="text-lg font-semibold">Shop Ratings</h5>
                                            <h4 className="text-[#000000b0] text-sm font-mono font-semibold">
                                                4/5
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h5 className="text-lg font-semibold">Joined On</h5>
                                            <h4 className="text-[#000000b0] text-sm font-mono font-semibold">
                                                {moment(sellerInfo?.createdAt).format('MMM Do YY')}
                                            </h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-[72%] rounded-[4px]">
                            {/* <ShopProfileData isOwner={true} /> */}
                            <div className="w-full">
                                <div className="flex w-full items-center justify-between">
                                    <div className="w-full flex">
                                        <div
                                            className="flex items-center"
                                            onClick={() => setActive(1)}
                                        >
                                            <h5
                                                className={`font-[600] text-[20px] ${
                                                    active === 1 ? 'text-red-500' : 'text-[#333]'
                                                } cursor-pointer pr-[20px]`}
                                            >
                                                Shop Products
                                            </h5>
                                        </div>
                                        <div
                                            className="flex items-center"
                                            onClick={() => setActive(2)}
                                        >
                                            <h5
                                                className={`font-[600] text-[20px] ${
                                                    active === 2 ? 'text-red-500' : 'text-[#333]'
                                                } cursor-pointer pr-[20px]`}
                                            >
                                                Running Events
                                            </h5>
                                        </div>

                                        <div
                                            className="flex items-center"
                                            onClick={() => setActive(3)}
                                        >
                                            <h5
                                                className={`font-[600] text-[20px] ${
                                                    active === 3 ? 'text-red-500' : 'text-[#333]'
                                                } cursor-pointer pr-[20px]`}
                                            >
                                                Shop Reviews
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div>
                                    {isLoading ? (
                                        <>
                                            <div className="flex items-center justify-center my-10">
                                                <ThreeCircles
                                                    height="100"
                                                    width="100"
                                                    color="#ff9900"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                    visible={true}
                                                    ariaLabel="three-circles-rotating"
                                                    outerCircleColor=""
                                                    innerCircleColor=""
                                                    middleCircleColor=""
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px]  mb-12 border-0">
                                                {products &&
                                                    products?.map((i: any, index: any) => (
                                                        <ProductCard
                                                            data={i}
                                                            key={index}
                                                            isShop={true}
                                                        />
                                                    ))}
                                            </div>
                                            {!products && (
                                                <h5 className="w-full text-center py-5 text-[18px]">
                                                    This shop has no product!
                                                </h5>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPreview;
