import React, { useEffect, useState } from 'react';
import { Country, State } from 'country-state-city';
import { useAuth } from '@/libs/Context/AuthProvider';
import { useCart } from '@/libs/Context/CartProvider';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import styles from '@/styles/styles';

const Checkouts = () => {
    const { currentUser } = useAuth();
    const { cartItems, refresh } = useCart();
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [userInfo, setUserInfo] = useState(false);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState(null);
    const [couponCode, setCouponCode] = useState('');
    // const [couponCodeData, setCouponCodeData] = useState(null);
    // const [discountPrice, setDiscountPrice] = useState(null);
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let totalPrice = 0;

    const getTotalPrice = () => {
        cartItems.forEach((item: any) => {
            totalPrice += item?.product?.discountPrice * item.quantity;
        });

        return totalPrice;
    };
    const subTotalPrice = getTotalPrice();

    // this is shipping cost variable
    const shipping = subTotalPrice * 0.1;

    const grandTotal = (subTotalPrice + shipping).toFixed(2);

    const paymentSubmit = () => {
        if (
            address1 === '' ||
            address2 === '' ||
            zipCode === null ||
            country === '' ||
            city === ''
        ) {
            toast.error('Please choose your delivery address!');
        } else {
            const shippingAddress = {
                address1,
                address2,
                zipCode,
                country,
                city
            };

            const orderData = {
                cartItems,
                totalPrice: grandTotal,
                subTotalPrice,
                shipping,
                // discountPrice,
                shippingAddress,
                currentUser
            };

            // update local storage with the updated orders array
            localStorage.setItem('latestOrder', JSON.stringify(orderData));
            refresh();
            router.push('/order/payment');
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
        //     const shopId = res.data.couponCode?.shopId;
        //     const couponCodeValue = res.data.couponCode?.value;
        //     if (res.data.couponCode !== null) {
        //         const isCouponValid = cart && cart.filter((item) => item.shopId === shopId);

        //         if (isCouponValid.length === 0) {
        //             toast.error('Coupon code is not valid for this shop');
        //             setCouponCode('');
        //         } else {
        //             const eligiblePrice = isCouponValid.reduce(
        //                 (acc, item) => acc + item.qty * item.discountPrice,
        //                 0
        //             );
        //             const discountPrice = (eligiblePrice * couponCodeValue) / 100;
        //             setDiscountPrice(discountPrice);
        //             setCouponCodeData(res.data.couponCode);
        //             setCouponCode('');
        //         }
        //     }
        //     if (res.data.couponCode === null) {
        toast.error("Coupon code doesn't exists!");
        //         setCouponCode('');
        //     }
        // });
    };

    // const discountPercentenge: any = couponCodeData ? discountPrice : '';

    return (
        <div className="w-full flex flex-col items-center py-8">
            <div className="w-[90%] 1000px:w-[70%] block md:flex space-x-0 md:space-x-5">
                <div className="w-full md:w-[65%] shadow-md rounded-md">
                    <ShippingInfo
                        user={currentUser}
                        country={country}
                        setCountry={setCountry}
                        city={city}
                        setCity={setCity}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        address1={address1}
                        setAddress1={setAddress1}
                        address2={address2}
                        setAddress2={setAddress2}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                    />
                </div>
                <div className="w-full md:w-[35%] shadow-md md:mt-0 mt-8 rounded-md">
                    <CartData
                        handleSubmit={handleSubmit}
                        totalPrice={grandTotal}
                        shipping={shipping}
                        subTotalPrice={subTotalPrice}
                        couponCode={couponCode}
                        setCouponCode={setCouponCode}
                        // discountPercentenge={discountPercentenge}
                    />
                </div>
            </div>
            <div
                className={`bg-[#ff9900] flex items-center justify-center py-2  w-[150px] md:w-[280px] mt-10 rounded-md cursor-pointer`}
                onClick={paymentSubmit}
            >
                <h5 className="text-white">Go to Payment</h5>
            </div>
        </div>
    );
};

const ShippingInfo = ({
    user,
    country,
    setCountry,
    city,
    setCity,
    userInfo,
    setUserInfo,
    address1,
    setAddress1,
    address2,
    setAddress2,
    zipCode,
    setZipCode
}: any) => {
    return (
        <div className="w-full md:w-[95%] bg-white rounded-md p-5 pb-8">
            <h5 className="text-[18px] font-[500]">Shipping Address</h5>
            <br />
            <form>
                <div className="w-full flex pb-3">
                    <div className="w-[50%]">
                        <label className="block pb-2">Full Name</label>
                        <input
                            type="text"
                            value={user && user.name}
                            required
                            className={`${styles.input} !w-[95%]`}
                        />
                    </div>
                    <div className="w-[50%]">
                        <label className="block pb-2">Email Address</label>
                        <input
                            type="email"
                            value={user && user.email}
                            required
                            className={`${styles.input}`}
                        />
                    </div>
                </div>

                <div className="w-full flex pb-3">
                    <div className="w-[50%]">
                        <label className="block pb-2">Phone Number</label>
                        <input
                            type="number"
                            required
                            value={user && user.phone}
                            className={`${styles.input} !w-[95%]`}
                        />
                    </div>
                    <div className="w-[50%]">
                        <label className="block pb-2">Zip Code</label>
                        <input
                            type="number"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                            className={`${styles.input}`}
                        />
                    </div>
                </div>

                <div className="w-full flex pb-3">
                    <div className="w-[50%]">
                        <label className="block pb-2">Country</label>
                        <select
                            className="w-[95%] border h-[40px] rounded-[5px]"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option className="block pb-2" value="">
                                Choose your country
                            </option>
                            {Country &&
                                Country.getAllCountries().map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="w-[50%]">
                        <label className="block pb-2">City</label>
                        <select
                            className="w-[95%] border h-[40px] rounded-[5px]"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option className="block pb-2" value="">
                                Choose your City
                            </option>
                            {State &&
                                State.getStatesOfCountry(country).map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <div className="w-full flex pb-3">
                    <div className="w-[50%]">
                        <label className="block pb-2">Address1</label>
                        <input
                            type="address"
                            required
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            className={`${styles.input} !w-[95%]`}
                        />
                    </div>
                    <div className="w-[50%]">
                        <label className="block pb-2">Address2</label>
                        <input
                            type="address"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            required
                            className={`${styles.input}`}
                        />
                    </div>
                </div>

                <div></div>
            </form>
            <h5
                className="text-[18px] cursor-pointer inline-block font-semibold"
                onClick={() => setUserInfo(!userInfo)}
            >
                Choose From saved address
            </h5>
            {userInfo && (
                <div>
                    {user &&
                        user.addresses.map((item: any, index: number) => (
                            <div className="w-full flex mt-1" key={index}>
                                <input
                                    type="checkbox"
                                    className="mr-3"
                                    value={item.addressType}
                                    onClick={() =>
                                        setAddress1(item.address1) ||
                                        setAddress2(item.address2) ||
                                        setZipCode(item.zipCode) ||
                                        setCountry(item.country) ||
                                        setCity(item.city)
                                    }
                                />
                                <h2>{item.addressType}</h2>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

const CartData = ({
    handleSubmit,
    totalPrice,
    shipping,
    subTotalPrice,
    couponCode,
    setCouponCode
}: any) => {
    return (
        <div className="w-full bg-[#fff] rounded-md p-5 pb-8 h-auto">
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
                <h5 className="text-[18px] font-[600]">${subTotalPrice}</h5>
            </div>
            <br />
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
                <h5 className="text-[18px] font-[600]">${shipping.toFixed(2)}</h5>
            </div>
            <br />
            <div className="flex justify-between border-b pb-3">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
                <h5 className="text-[18px] font-[600]">-</h5>
            </div>
            <h5 className="text-[18px] font-[600] text-end pt-3">${totalPrice}</h5>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={`${styles.input} h-[40px] pl-2`}
                    placeholder="Coupoun code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    required
                />
                <input
                    className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
                    required
                    value="Apply code"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default Checkouts;
