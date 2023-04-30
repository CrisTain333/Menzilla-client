import Image from 'next/image';
import React from 'react';
import Banner1 from '../../../public/images/Banner-1.png';
import Banner2 from '../../../public/images/Banner-2.png';
import MackBook_Banner from '../../../public/images/MacBook_Air_banner (2).png';
import iPad_Banner from '../../../public/images/ipad.png';
import watch_Banner from '../../../public/images/watch.png';
import earphone_Banner from '../../../public/images/earphone.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 ">
                {/* left side */}
                <div className="col-span-12 md:col-span-6">
                    <div>
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={10000}
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

                                        <h2 className="text-3xl md:text-5xl font-bold mt-5">
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
                                <div className="text-start absolute top-2 left-2 md:top-8 md:left-7">
                                    <p className="text-red-500 text-sm font-medium ">
                                        SUPERCHARGED FOR PROS
                                    </p>

                                    <h2 className="text-3xl md:text-5xl font-bold mt-5">
                                        Special Deal{' '}
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
                        </Carousel>
                    </div>
                </div>

                {/* RIGHT SIDE  */}
                <div className="col-span-12 md:col-span-6">
                    {/* MAIN DIV  */}
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative">
                                <Image
                                    src={MackBook_Banner}
                                    alt="banner_1"
                                    className="w-full rounded-lg"
                                    height={2000}
                                    width={2000}
                                />
                                <div className="text-start absolute top-14 left-5 md:top-8 md:left-3">
                                    <p className="text-red-500 text-base md:text-xs font-semibold ">
                                        New Arrival
                                    </p>

                                    <h2 className="text-2xl md:text-xl font-bold mt-2">
                                        Buy Ipad Air{' '}
                                    </h2>

                                    <p className="text-base md:text-xs  font-semibold mt-4">
                                        From $999.00 or
                                    </p>
                                    <p className="text-base md:text-xs font-semibold">
                                        {' '}
                                        $41.62 For 24 mo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative">
                                <Image
                                    src={iPad_Banner}
                                    alt="banner_1"
                                    className="w-full rounded-lg"
                                    height={2000}
                                    width={2000}
                                />
                                <div className="text-start absolute top-14 left-5 md:top-8 md:left-3 ">
                                    <p className="text-red-500 text-base md:text-xs font-semibold">
                                        New Arrival
                                    </p>

                                    <h2 className="text-2xl md:text-xl font-bold mt-2">
                                        Buy Ipad Air{' '}
                                    </h2>

                                    <p className="text-base md:text-xs  font-semibold mt-4">
                                        From $999.00 or
                                    </p>
                                    <p className="text-base md:text-xs  font-semibold">
                                        {' '}
                                        $41.62 For 24 mo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative">
                                <Image
                                    src={watch_Banner}
                                    alt="banner_1"
                                    className="w-full rounded-lg"
                                    height={2000}
                                    width={2000}
                                />
                                <div className="text-start absolute top-14 left-5 md:top-8 md:left-3 ">
                                    <p className="text-red-500 text-base md:text-xs font-semibold">
                                        15% OFF
                                    </p>

                                    <h2 className="text-2xl md:text-xl font-bold mt-2">
                                        Smartwatch 7{' '}
                                    </h2>

                                    <p className="text-base md:text-xs  font-semibold mt-4">
                                        Shop The latest
                                    </p>
                                    <p className="text-base md:text-xs font-semibold">
                                        Styles and colors
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative">
                                <Image
                                    src={earphone_Banner}
                                    alt="banner_1"
                                    className="w-full rounded-lg"
                                    height={2000}
                                    width={2000}
                                />
                                <div className="  text-start absolute top-14 left-5 md:top-8 md:left-3 ">
                                    <p className="text-red-500 text-base md:text-xs font-semibold">
                                        FREE ENGRAVING
                                    </p>

                                    <h2 className="text-2xl md:text-xl font-bold mt-2">
                                        AirPods Max
                                    </h2>

                                    <p className="text-base md:text-xs  font-semibold mt-4">
                                        High-fidelity playback
                                    </p>
                                    <p className="text-base md:text-xs font-semibold">
                                        & ultra-low distortion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
