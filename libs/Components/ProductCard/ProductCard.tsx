import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import ProductDetailsModal from '../Modals/ProductDetailsModal.tsx/PorductDetailsModal';
import { BiCartAdd } from 'react-icons/bi';
import { useCart } from '@/libs/Context/CartProvider';

const ProductCard = ({ data }: any) => {
    const [showProductDetails, setShowProductDetails] = useState(false);
    // console.log(showProductDetails);
    const { handleAddToCart } = useCart();
    // // const [productData, setProductData] = useState<any>(null);

    // const handleAddToCart = () => {
    //     // addToCart(data);
    //     // setCartLength((prevLength) => prevLength + 1);
    // };

    return (
        <div>
            <div className="w-full h-[370px] bg-white rounded-lg shadow-md p-3 relative cursor-pointer">
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
                    <h4 className="font-[500] h-14">
                        {data?.name?.length > 40 ? data?.name?.slice(0, 40) + '...' : data?.name}
                    </h4>

                    {/* <div className="flex">
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" size={20} color="#F6BA00" />
                        <AiFillStar className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                        <AiOutlineStar size={20} className="mr-2 cursor-pointer" color="#F6BA00" />
                    </div> */}

                    <div className="py-1 flex items-center justify-between">
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
                <div
                    className="flex items-center justify-center rounded-sm bg-[#ff9900] px-5 py-1 text-center text-sm font-medium text-white hover:bg-[#ef9000] transition-all duration-300"
                    onClick={() => handleAddToCart(data)}
                >
                    <BiCartAdd size={20} className=" mr-1" color="#fff" title="Add to cart" />
                    Add to cart
                </div>

                {/* side options */}
                <div>
                    <label
                        htmlFor="ProductDetails"
                        className="cursor-pointer absolute right-1 top-1"
                        onClick={() => setShowProductDetails(!showProductDetails)}
                    >
                        <AiOutlineEye size={22} className="" title="Quick view" />
                    </label>
                    {/* <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        color="#444"
                        title="Add to cart"
                    /> */}
                </div>
            </div>

            {showProductDetails && (
                <ProductDetailsModal setShowProductDetails={setShowProductDetails} data={data} />
            )}
        </div>
    );
};

export default ProductCard;
