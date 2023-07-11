// import React, { useState } from 'react';
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar
} from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import styles from '../../../styles/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
// import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';
// import { useEffect } from 'react';
// import { addTocart } from '../../../redux/actions/cart';
// import { toast } from 'react-toastify';
// import Ratings from '../../Products/Ratings';

import { useCart } from '@/libs/Context/CartProvider';
import Link from 'next/link';
import styles from '@/styles/styles';
import Image from 'next/image';
import ProductDetailsModal from '../Modals/ProductDetailsModal.tsx/PorductDetailsModal';
import { useState } from 'react';
import Ratings from './Ratings/Ratings';

const PROductCard = ({ data }: any) => {
    const [showProductDetails, setShowProductDetails] = useState(false);
    // const { wishlist } = useSelector((state) => state.wishlist);
    // const { cart } = useSelector((state) => state.cart);
    // const [click, setClick] = useState(false);
    // const [open, setOpen] = useState(false);
    // const dispatch = useDispatch();
    const { handleAddToCart } = useCart();

    return (
        <>
            <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
                <div className="flex justify-end"></div>
                <Link href={`${`/product/${data._id}`}`}>
                    <Image
                        src={`${data?.images?.[0]}`}
                        alt="productImage"
                        className="w-full h-[170px] object-contain"
                        height={500}
                        width={500}
                    />
                </Link>
                <Link href={`/shop/preview/${data?.shop._id}`}>
                    <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
                </Link>
                <Link href={`${`/product/${data._id}`}`}>
                    <h4 className="pb-3 font-[500]">
                        {data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name}
                    </h4>

                    <div className="flex">
                        <Ratings rating={data?.ratings} />
                    </div>

                    <div className="py-2 flex items-center justify-between">
                        <div className="flex">
                            <h5 className={`${styles.productDiscountPrice}`}>
                                {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}
                                $
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ? data.originalPrice + ' $' : null}
                            </h4>
                        </div>
                        <span className="font-[400] text-[17px] text-[#68d284]">
                            {data?.sold_out} sold
                        </span>
                    </div>
                </Link>

                {/* side options */}
                <div>
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        // onClick={() => setOpen(!open)}
                        onClick={() => setShowProductDetails(!showProductDetails)}
                        color="#333"
                        title="Quick view"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => handleAddToCart(data)}
                        color="#444"
                        title="Add to cart"
                    />
                    {showProductDetails && (
                        <ProductDetailsModal
                            setShowProductDetails={setShowProductDetails}
                            data={data}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default PROductCard;
