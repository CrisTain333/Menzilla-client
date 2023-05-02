import styles from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart
} from 'react-icons/ai';

const ProductDetail = ({ data }: any) => {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const router = useRouter();

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleMessageSubmit = () => {
        router.push('/inbox?conversation=507ebjver884ehfdjeriv84');
    };

    return (
        <div>
            <div className="bg-white">
                {data ? (
                    <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
                        <div className="w-full py-5">
                            <div className="block w-full 800px:flex">
                                <div className="w-full 800px:w-[50%]">
                                    <Image
                                        src={data.image_Url[select].url}
                                        alt=""
                                        className="w-[35%] mx-auto rounded-md  my-5"
                                        height={500}
                                        width={500}
                                    />
                                    <div className="w-full flex space-x-5">
                                        <div
                                            className={`${
                                                select === 0 ? 'border border-[#ff9900]' : 'null'
                                            } cursor-pointer rounded-md shadow-sm p-2`}
                                        >
                                            <Image
                                                src={data?.image_Url[0].url}
                                                alt=""
                                                className="w-32 "
                                                onClick={() => setSelect(0)}
                                                height={500}
                                                width={500}
                                            />
                                        </div>
                                        <div
                                            className={`${
                                                select === 1 ? 'border border-[#ff9900]' : 'null'
                                            } cursor-pointer rounded-md shadow-sm p-2`}
                                        >
                                            <Image
                                                src={data?.image_Url[1].url}
                                                alt=""
                                                className="w-32 "
                                                onClick={() => setSelect(1)}
                                                height={500}
                                                width={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full 800px:w-[50%] pt-5">
                                    <h1 className={`font-bold text-lg my-2`}>{data.name}</h1>
                                    <p className="text-justify leading-8 font-medium">
                                        {' '}
                                        {data.description}
                                    </p>
                                    <div className="flex pt-3">
                                        <h4 className={`${styles.productDiscountPrice}`}>
                                            {data.discount_price}$
                                        </h4>
                                        <h3 className={`${styles.price}`}>
                                            {data.price ? data.price + '$' : null}
                                        </h3>
                                    </div>

                                    <div className="flex items-center mt-12 justify-between pr-3">
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
                                        <div>
                                            {click ? (
                                                <AiFillHeart
                                                    size={30}
                                                    className="cursor-pointer"
                                                    onClick={() => setClick(!click)}
                                                    color={click ? 'red' : '#333'}
                                                    title="Remove from wishlist"
                                                />
                                            ) : (
                                                <AiOutlineHeart
                                                    size={30}
                                                    className="cursor-pointer"
                                                    onClick={() => setClick(!click)}
                                                    color={click ? 'red' : '#333'}
                                                    title="Add to wishlist"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                                    >
                                        <span className=" bg-[#ff9900] py-2 px-3 rounded-sm text-white flex items-center">
                                            Add to cart <AiOutlineShoppingCart className="ml-1" />
                                        </span>
                                    </div>
                                    <div className="flex items-center pt-8">
                                        <img
                                            src={data.shop.shop_avatar.url}
                                            alt=""
                                            className="w-[50px] h-[50px] rounded-full mr-2"
                                        />
                                        <div className="pr-8">
                                            <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                                {data.shop.name}
                                            </h3>
                                            <h5 className="pb-3 text-[15px]">
                                                ({data.shop.ratings}) Ratings
                                            </h5>
                                        </div>
                                        <div
                                            className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                                            onClick={handleMessageSubmit}
                                        >
                                            <span className="text-white flex items-center">
                                                Send Message <AiOutlineMessage className="ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductDetailsInfo data={data} />
                        <br />
                        <br />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

const ProductDetailsInfo = ({ data }: any) => {
    const [active, setActive] = useState(1);

    return (
        <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5
                        className={
                            'text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]'
                        }
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>
                    {active === 1 ? <div className={`${styles.active_indicator}`} /> : null}
                </div>
                <div className="relative">
                    <h5
                        className={
                            'text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]'
                        }
                        onClick={() => setActive(2)}
                    >
                        Product Reviews
                    </h5>
                    {active === 2 ? <div className={`${styles.active_indicator}`} /> : null}
                </div>
                <div className="relative">
                    <h5
                        className={
                            'text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]'
                        }
                        onClick={() => setActive(3)}
                    >
                        Seller Information
                    </h5>
                    {active === 3 ? <div className={`${styles.active_indicator}`} /> : null}
                </div>
            </div>
            {active === 1 ? (
                <>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        Product details are a crucial part of any eCommerce website or online
                        marketplace. These details help the potential customers to make an informed
                        decision about the product they are interested in buying. A well-written
                        product description can also be a powerful marketing tool that can help to
                        increase sales. Product details typically include information about the
                        products features, specifications, dimensions, weight, materials, and other
                        relevant information that can help language, and be honest and transparent
                        about the products features and limitations.
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        customers to understand the product better. The product details section
                        should also include high-quality images and videos of the product, as well
                        as customer reviews and ratings. When writing product details, it is
                        essential to keep the target audience in mind. The language used should be
                        clear and easy to understand, and technical terms should be explained in
                        simple language. The tone of the product details should be persuasive,
                        highlighting the unique features of the
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        customers to understand the product better. The product details section
                        should also include high-quality images and videos of the product, as well
                        as customer reviews and ratings. When writing product details, it is
                        essential to keep the target audience in mind. The language used should be
                        clear and easy to understand, and technical terms should be explained in
                        simple language. The tone of the product details should be persuasive,
                        highlighting the unique features of the
                    </p>
                </>
            ) : null}

            {active === 2 ? (
                <div className="w-full justify-center min-h-[40vh] flex items-center">
                    <p>No Reviews yet!</p>
                </div>
            ) : null}

            {active === 3 && (
                <div className="w-full block 800px:flex p-5">
                    <div className="w-full 800px:w-[50%]">
                        <div className="flex items-center">
                            <img
                                src={data.shop.shop_avatar.url}
                                className="w-[50px] h-[50px] rounded-full"
                                alt=""
                            />
                            <div className="pl-3">
                                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                                <h5 className="pb-2 text-[15px]">({data.shop.ratings}) Ratings</h5>
                            </div>
                        </div>
                        <p className="pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum
                            quibusdam omnis a minima perspiciatis itaque magnam nesciunt, porro
                            saepe aspernatur repudiandae iusto sapiente, esse accusamus eligendi!
                            Vel, officia similique?
                        </p>
                    </div>
                    <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                        <div className="text-left">
                            <h5 className="font-[600]">
                                Joined on: <span className="font-[500]">14 March,2023</span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Products: <span className="font-[500]">1,223</span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Reviews: <span className="font-[500]">324</span>
                            </h5>
                            <Link href="/">
                                <div className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}>
                                    <h4 className="text-white">Visit Shop</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
