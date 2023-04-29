import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';
import Banner1 from '../../../public/images/Banner-1.png';
import Banner2 from '../../../public/images/327399234_552425286859240_5476744742228981475_n.jpg';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    return (
        <div className="">
            <HeaderAndFooter>
                {/* MAIN DIV  */}
                <div className="main_div">
                    <div className="grid grid-cols-12 gap-5 ">
                        {/* left side */}
                        <div className="col-span-12 md:col-span-6">
                            <div>
                                <Carousel
                                    // infiniteLoop={true}
                                    // autoPlay={true}
                                    interval={5000}
                                    showArrows={false}
                                    showStatus={false}
                                >
                                    <div>
                                        <div className="relative ">
                                            <Image
                                                src={Banner1}
                                                alt="banner_1"
                                                className="w-full rounded-lg"
                                                height={2000}
                                                width={2000}
                                            />
                                            {/* top-8 left-8 */}
                                            <div className="text-start absolute top-2 left-2 md:top-8 md:left-7">
                                                <p className="text-red-500 text-sm font-medium ">
                                                    SUPERCHARGED FOR PROS
                                                </p>

                                                <h2 className="text-5xl font-bold mt-5">
                                                    iPad S13+ Pro.{' '}
                                                </h2>

                                                <p className="text-sm md:text-lg font-semibold mt-3 md:mt-8">
                                                    From $999.00 or $41.62
                                                </p>
                                                <p className="text-sm md:text-lg font-semibold mt-3 font-[Roboto]">
                                                    For 24 mo. Footnote $
                                                </p>

                                                <div className="mt-4  md:mt-10">
                                                    <button className="py-2 px-3 rounded-md text-lg bg-[#1C2B35] text-white">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative ">
                                        <Image
                                            src={Banner2}
                                            alt="banner_1"
                                            className="w-full rounded-lg"
                                            height={2000}
                                            width={2000}
                                        />
                                        {/* top-8 left-8 */}
                                        <div className="text-start absolute top-2 left-2 md:top-8 md:left-8">
                                            <p className="text-red-500 text-sm font-medium ">
                                                SUPERCHARGED FOR PROS
                                            </p>

                                            <h2 className="text-3xl font-bold mt-5">
                                                Special Sale
                                            </h2>

                                            <p className="text-sm md:text-base font-semibold mt-3 md:mt-8 font-sans">
                                                From $999.00 or $41.62
                                            </p>
                                            <p className="text-sm md:text-base font-semibold mt-3 font-sans">
                                                For 24 mo. Footnote $
                                            </p>

                                            <div className="mt-4  md:mt-10">
                                                <button className="py-2 px-3 rounded-md text-lg bg-[#1C2B35] text-white">
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        {/* RIGHT SIDE  */}
                        <div className="col-span-12 md:col-span-6">
                            {/* MAIN DIV  */}
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-6">
                                    <Image
                                        src={Banner1}
                                        alt="banner_1"
                                        className="w-full rounded-lg"
                                        height={2000}
                                        width={2000}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <Image
                                        src={Banner1}
                                        alt="banner_1"
                                        className="w-full rounded-lg"
                                        height={2000}
                                        width={2000}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <Image
                                        src={Banner1}
                                        alt="banner_1"
                                        className="w-full rounded-lg"
                                        height={2000}
                                        width={2000}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <Image
                                        src={Banner1}
                                        alt="banner_1"
                                        className="w-full rounded-lg"
                                        height={2000}
                                        width={2000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
