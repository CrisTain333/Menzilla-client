import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
    return (
        <div>
            <div className="w-full">
                <div className="sm:max-w-5xl pt-8 rounded-xl bg-white mx-4 sm:mx-8 md:mx-auto">
                    <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
                        <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pt-4">
                            Trusted by company sponsor
                        </h1>
                    </div>
                    <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16 "
                                src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png"
                                alt="Adidas"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl ">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16"
                                src="https://cdn-icons-png.flaticon.com/128/187/187902.png"
                                alt="Chanel"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16"
                                src="https://cdn-icons-png.flaticon.com/128/3845/3845877.png"
                                alt="Nike"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16"
                                src="https://cdn-icons-png.flaticon.com/128/732/732242.png"
                                alt="Toyota"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16"
                                src="https://cdn-icons-png.flaticon.com/128/187/187868.png"
                                alt="Toyota"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                            <Image
                                height={400}
                                width={400}
                                className="focus:outline-none w-12 sm:w-16"
                                src="https://cdn-icons-png.flaticon.com/128/685/685680.png"
                                alt="Toyota"
                                role="img"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
