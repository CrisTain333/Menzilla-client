import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
const ProductDetailsModal = ({ data, setShowProductDetails }: any) => {
    console.log(data);
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);

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
                        <div className="flex flex-wrap">
                            <div>
                                <Image
                                    height={400}
                                    width={400}
                                    src={data?.image_Url[0]?.url}
                                    alt="productImage"
                                    className="h-auto  rounded-lg"
                                />

                                <div>
                                    <div className="flex ml-5 -mt-4">
                                        <Link
                                            href={`/shop/preview/${data.shop._id}`}
                                            className="flex"
                                        >
                                            <Image
                                                src={data?.shop?.shop_avatar?.url}
                                                alt=""
                                                height={300}
                                                width={300}
                                                className="w-[50px] h-[50px] rounded-full mr-2"
                                            />
                                            <div>
                                                <h3 className={`${styles.shop_name}`}>
                                                    {data.shop.name}
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
                                        <div className="flex">
                                            <h4 className={`${styles.productDiscountPrice}`}>
                                                {data?.discount_price}$
                                            </h4>
                                            <h3 className={`${styles.price}`}>
                                                {data?.price ? data.price + '$' : null}
                                            </h3>
                                        </div>
                                        <div>
                                            <div className="flex">
                                                <button
                                                    data-action="decrement"
                                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                                >
                                                    <span className="m-auto text-2xl font-thin">
                                                        −
                                                    </span>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                                    name="custom-input-number"
                                                    value="0"
                                                ></input>
                                                <button
                                                    data-action="increment"
                                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                                >
                                                    <span className="m-auto text-2xl font-thin">
                                                        +
                                                    </span>
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
                            className="absolute right-2 top-3 z-50"
                            onClick={() => setShowProductDetails(false)}
                        />
                    </>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
