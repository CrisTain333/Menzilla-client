import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
const ProductDetailsModal = ({ data, setShowProductDetails }: any) => {
    // console.log(data);
    const [count, setCount] = useState(1);

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <input type="checkbox" id="ProductDetails" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    {/* <--------------------------------------------> */}
                    <>
                        <div className="flex">
                            <div>
                                <Image
                                    height={400}
                                    width={400}
                                    src={data?.images?.[0]}
                                    alt="productImage"
                                    className="h-auto w-auto  rounded-lg"
                                />

                                <div>
                                    <div className="flex ml-5 mt-2">
                                        <Link
                                            href={`/shop/preview/${data?.shop?._id}`}
                                            className="flex"
                                        >
                                            <Image
                                                src={data?.shop?.shopProfile}
                                                alt=""
                                                height={300}
                                                width={300}
                                                className="w-[50px] h-[50px] rounded-full mr-2"
                                            />
                                            <div>
                                                <h3 className={`${styles.shop_name}`}>
                                                    {data?.name}
                                                </h3>
                                                <h5 className="pb-3 text-[15px]">(4.5) Ratings</h5>
                                            </div>
                                        </Link>
                                    </div>

                                    <div
                                        className={` mt-4 rounded-[4px] h-11 flex justify-center border cursor-pointer border-gray-300 `}
                                        // onClick={handleMessageSubmit}
                                    >
                                        <span className="text-black flex items-center">
                                            Send Message <AiOutlineMessage className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {data?.name}
                                </h1>
                                <p className="text-justify text-sm font-medium mt-3">
                                    {data?.description}
                                </p>
                                <div className="mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <h4 className={`text-xl font-bold`}>
                                                {data?.discountPrice}$
                                            </h4>
                                            <h3
                                                className={`${styles.price} text-gray-500 font-semibold ml-1`}
                                            >
                                                {data?.originalPrice
                                                    ? data?.originalPrice + '$'
                                                    : null}
                                            </h3>
                                        </div>
                                        <div className="flex">
                                            <div className="quantity-field">
                                                <button
                                                    className="value-button decrease-button"
                                                    onClick={decrementCount}
                                                >
                                                    -
                                                </button>
                                                <div className="number">{count}</div>
                                                <button
                                                    className="value-button increase-button"
                                                    onClick={incrementCount}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                        <span className="flex items-center">
                                            Add to cart <AiOutlineShoppingCart className="ml-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <RxCross1
                            size={20}
                            className="absolute right-2 top-3 z-50 cursor-pointer"
                            onClick={() => setShowProductDetails(false)}
                        />
                    </>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
