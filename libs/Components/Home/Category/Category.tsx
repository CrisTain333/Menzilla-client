import React from 'react';
import { categoriesData } from '../../../common/constant/Data';
import styles from '../../../../styles/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Categories = () => {
    // const navigate = useNavigate();
    const brandingData = [
        {
            id: 1,
            title: 'Free Shipping',
            Description: 'From all orders over 100$',
            icon: (
                <>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1H5.63636V24.1818H35"
                            stroke="#FFBB38"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                        ></path>
                        <path
                            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                            stroke="#FFBB38"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                        ></path>
                        <path
                            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                            stroke="#FFBB38"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                        ></path>
                        <path
                            d="M34.9982 1H11.8164V18H34.9982V1Z"
                            stroke="#FFBB38"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                        ></path>
                        <path
                            d="M11.8164 7.18164H34.9982"
                            stroke="#FFBB38"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                        ></path>
                    </svg>
                </>
            )
        },
        {
            id: 2,
            title: 'Daily Surprise Offers',
            Description: 'Save up to 25% off',
            icon: (
                <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    ></path>
                    <path
                        d="M30.7 2L29.5 10.85L20.5 9.65"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                </svg>
            )
        },
        {
            id: 4,
            title: 'Affortable Prices',
            Description: 'Get Factory direct price',
            icon: (
                <svg
                    width="32"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    ></path>
                    <path
                        d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    ></path>
                    <path
                        d="M16 28V22"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    ></path>
                    <path
                        d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                    <path
                        d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                </svg>
            )
        },
        {
            id: 5,
            title: 'Secure Payments',
            Description: '100% protected payments',
            icon: (
                <svg
                    width="32"
                    height="38"
                    viewBox="0 0 32 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                    <path
                        d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                    <path
                        d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                        stroke="#FFBB38"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    ></path>
                </svg>
            )
        }
    ];
    const router = useRouter();
    return (
        <>
            <div className={`${styles.section} hidden sm:block`}>
                <div
                    className={`branding my-16 grid grid-cols-12 w-full shadow-sm bg-white p-5 rounded-md gap-5`}
                >
                    {brandingData &&
                        brandingData.map((i: any, index: any) => (
                            <div className="col-span-3 md:col-span-6 lg:col-span-3" key={index}>
                                <div className="flex items-center justify-around">
                                    <span> {i.icon}</span>
                                    <div className="px-3">
                                        <h3 className="font-bold text-sm md:text-base">
                                            {i.title}
                                        </h3>
                                        <p className="text-xs md:text-sm">{i.Description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id="categories">
                <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
                    {categoriesData &&
                        categoriesData.map((i) => {
                            const handleSubmit = (i: any) => {
                                router.push(`/products?category=${i.title}`);
                            };
                            return (
                                <div
                                    className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                                    key={i.id}
                                    onClick={() => handleSubmit(i)}
                                >
                                    <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                                    <Image
                                        height={400}
                                        width={400}
                                        src={i.image_Url}
                                        className="w-[120px] object-cover"
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Categories;
