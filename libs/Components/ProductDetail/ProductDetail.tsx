import { useCart } from '@/libs/Context/CartProvider';
import styles from '@/styles/styles';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessageDots } from 'react-icons/bi';

const ProductDetail = ({ data }: any) => {
    const [count, setCount] = useState(1);
    const [select, setSelect] = useState(0);
    const router = useRouter();
    const { refresh } = useCart();

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = (product: any, qun: number) => {
        let cart = localStorage.getItem('cartItem');
        if (!cart) {
            cart = JSON.stringify([{ product, quantity: qun }]);
            localStorage.setItem('cartItem', cart);
        } else {
            const cartItems = JSON.parse(cart);
            const existingItem = cartItems.find((item: any) => item.product._id === product._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                toast.success('Product Added');
                cartItems.push({ product, quantity: qun });
            }
            localStorage.setItem('cartItem', JSON.stringify(cartItems));
            refresh();
        }
    };

    const handleMessageSubmit = () => {
        router.push('/inbox?conversation=507ebjver884ehfdjeriv84');
    };

    return (
        <div>
            <div className="">
                {data ? (
                    <div className={``}>
                        <div className="w-full py-5">
                            <div className="block w-full md:flex">
                                <div className="w-full md:w-[50%]">
                                    <div className="">
                                        <Image
                                            src={data?.images?.[select]}
                                            alt=""
                                            className="w-[80%]  mx-auto rounded-md  my-5"
                                            height={500}
                                            width={500}
                                        />
                                    </div>
                                    <div className="w-full flex space-x-5">
                                        {data?.images?.map((e: any, index: any) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`${
                                                        select === index
                                                            ? 'border border-[#ff9900]'
                                                            : 'null'
                                                    } cursor-pointer rounded-md shadow-sm p-2`}
                                                >
                                                    <Image
                                                        src={e}
                                                        alt=""
                                                        className="w-32 "
                                                        onClick={() => setSelect(index)}
                                                        height={500}
                                                        width={500}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="w-full md:w-[50%] pt-5">
                                    <h1 className={`font-bold text-lg my-2`}>{data?.name}</h1>
                                    <p className="text-justify leading-8 font-medium">
                                        {' '}
                                        {data.description}
                                    </p>
                                    <div className="flex pt-3">
                                        <h4 className={`${styles.productDiscountPrice}`}>
                                            ${data?.discountPrice}
                                        </h4>
                                        <h3 className={`${styles.price}`}>
                                            {data?.originalPrice ? data?.originalPrice + '$' : null}
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
                                    </div>
                                    <div
                                        className={` !mt-6 !rounded !h-11 flex items-center justify-start cursor-pointer`}
                                        onClick={() => {
                                            addToCart(data, count);
                                            setCount(0);
                                        }}
                                    >
                                        <span className=" bg-[#ff9900] py-2 px-3 rounded-sm text-white flex items-center">
                                            Add to cart <AiOutlineShoppingCart className="ml-1" />
                                        </span>
                                    </div>
                                    <div className="flex items-center pt-8">
                                        <Link href={`/shop/preview?shopId=${data?.shop._id}`}>
                                            <Image
                                                height={400}
                                                width={400}
                                                src={data?.shop?.shopProfile}
                                                alt=""
                                                className="h-10 w-10 rounded-full mr-3 ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"
                                            />
                                        </Link>
                                        <div className="pr-8">
                                            <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                                {data?.shop?.name}
                                            </h3>
                                            <h5 className="pb-3 text-[15px]">
                                                ({data?.shop?.ratings}) Ratings
                                            </h5>
                                        </div>
                                        <div
                                            className={`px-5 py-2.5 font-medium bg-blue-400 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-sm text-sm`}
                                            onClick={handleMessageSubmit}
                                        >
                                            <span className="text-white flex items-center">
                                                Send Message <BiMessageDots className="ml-1" />
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
        <div className="bg-slate-50 px-3 md:px-14 py-2 rounded">
            <div className="w-full flex justify-between border-b  pt-10 pb-3">
                <div className="relative">
                    <h5
                        className={
                            'text-[#000] text-lg px-1 leading-5 font-[600] cursor-pointer md:text-[20px]'
                        }
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>
                    {active === 1 ? (
                        <div
                            className={`absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]`}
                        />
                    ) : null}
                </div>
                <div className="relative">
                    <h5
                        className={
                            'text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer md:text-[20px]'
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
                            'text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer md:text-[20px]'
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
                    <p className="py-2 text-base font-medium text-justify leading-8 pb-5 whitespace-pre-line">
                        {data?.description}
                    </p>
                </>
            ) : null}

            {active === 2 ? (
                <div className="w-full justify-center min-h-[40vh] flex items-center">
                    <p>No Reviews yet!</p>
                </div>
            ) : null}

            {active === 3 && (
                <div className="w-full block md:flex p-5">
                    <div className="w-full md:w-[50%]">
                        <div className="flex items-center">
                            <Image
                                src={data?.shop?.shopProfile}
                                className="w-12 h-12 rounded-full ring ring-[#ff9900] ring-offset-base-100 ring-offset-2"
                                alt="shopImage"
                                height={500}
                                width={500}
                            />
                            <div className="pl-3">
                                <h3 className={`${styles.shop_name}`}>{data?.shop?.name}</h3>
                                <h5 className="pb-2 text-[15px]">
                                    ({data?.shop?.ratings}) Ratings
                                </h5>
                            </div>
                        </div>
                        <p className="pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum
                            quibusdam omnis a minima perspiciatis itaque magnam nesciunt, porro
                            saepe aspernatur repudiandae iusto sapiente, esse accusamus eligendi!
                            Vel, officia similique?
                        </p>
                    </div>
                    <div className="w-full md:w-[50%] mt-5 md:mt-0 md:flex flex-col items-end">
                        <div className="text-left">
                            <h5 className="font-[600]">
                                Joined on:{' '}
                                <span className="font-[500]">
                                    {moment(data?.shop?.createdAt).format('LL')}
                                </span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Products: <span className="font-[500]">1,223</span>
                            </h5>
                            <h5 className="font-[600] pt-3">
                                Total Reviews: <span className="font-[500]">324</span>
                            </h5>
                            <Link href="/">
                                <div
                                    className={`px-5 py-2.5 font-medium bg-blue-400 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-sm text-sm flex justify-center items-center mt-5`}
                                    // onClick={handleMessageSubmit}
                                >
                                    <span className="text-white flex items-center">Visit Shop</span>
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
