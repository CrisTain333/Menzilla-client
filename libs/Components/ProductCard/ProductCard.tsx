import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineEye, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import ProductDetailsModal from '../Modals/ProductDetailsModal.tsx/PorductDetailsModal';

const ProductCard = ({ data }: any) => {
    const [showProductDetails, setShowProductDetails] = useState(false);
    const [productData, setProductData] = useState<any>(null);

    return (
        <div>
            <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
                <div className="flex justify-end"></div>
                <Link href={`/product/${data?.product_name}`}>
                    <Image
                        src={`${data?.images?.[0]}`}
                        alt="productImage"
                        className="w-full h-44 object-contain"
                        height={500}
                        width={500}
                    />
                </Link>
                <Link href="/">
                    <h5 className={`${styles.shop_name}`}>{data?.shop?.name}</h5>
                </Link>
                <Link href={`/product/${data?.name}`}>
                    <h4 className="pb-3 font-[500] h-16">
                        {data?.name?.length > 40 ? data?.name?.slice(0, 40) + '...' : data?.name}
                    </h4>

                    <div className="flex">
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                        <AiOutlineStar size={20} className="mr-2 cursor-pointer" color="#F6BA00" />
                    </div>

                    <div className="py-3 flex items-center justify-between">
                        <div className="flex items-center justify-center">
                            <h5 className={`${styles?.productDiscountPrice}`}>
                                {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}
                                $
                            </h5>
                            <h4
                                className={`font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through`}
                            >
                                {data.originalPrice ? data.originalPrice + ' $' : null}
                            </h4>
                        </div>
                        <span className="font-[400] text-[17px] text-[#68d284]">50 sold</span>
                    </div>
                </Link>

                {/* side options */}
                <div>
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setShowProductDetails(!showProductDetails)}
                        // onClick={() => setOpen(!open)}
                        color="#333"
                        title="Quick view"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        // onClick={() => setShowProductDetails(!showProductDetails)}
                        color="#444"
                        title="Add to cart"
                    />
                    {/* {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null} */}
                </div>
            </div>

            {showProductDetails ? (
                <ProductDetailsModal setShowProductDetails={setShowProductDetails} data={data} />
            ) : null}
        </div>
    );
};

export default ProductCard;
