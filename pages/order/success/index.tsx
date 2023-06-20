import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';
// import Lottie from 'react-lottie';
import animationData from '../../../libs/assets/success.json';

const index = () => {
    return (
        <div>
            <HeaderAndFooter>
                <Success />
            </HeaderAndFooter>
            <p>Success Page </p>
        </div>
    );
};

export default index;

const Success = () => {
    return (
        <div className="h-[50vh]">
            {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
            <div className="flex items-center justify-center">
                <svg
                    className="success"
                    width="159px"
                    height="159px"
                    viewBox="0 0 159 159"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    {/* <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch --> */}
                    <title>Group</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g
                            id="kuittaus---maksu-onnistui"
                            transform="translate(-81.000000, -239.000000)"
                        >
                            <g id="Group" transform="translate(81.000000, 239.000000)">
                                <polyline
                                    id="Stroke-52"
                                    stroke="#00C6BA"
                                    stroke-width="18"
                                    points="44 76.578 71.37 103.058 114.816 56"
                                ></polyline>
                                <path
                                    d="M79.278,135.52 C48.324,135.52 23.132,110.328 23.132,79.374 C23.132,48.412 48.324,23.22 79.278,23.22 C110.24,23.22 135.424,48.412 135.424,79.374 C135.424,110.328 110.24,135.52 79.278,135.52 M79.278,0 C35.558,0 -2.27373675e-13,35.56 -2.27373675e-13,79.278 C-2.27373675e-13,122.996 35.558,158.574 79.278,158.574 C122.996,158.574 158.574,122.996 158.574,79.278 C158.574,35.56 122.996,0 79.278,0"
                                    id="Fill-136"
                                    fill="#65E5D8"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <h5 className="text-center mb-36 mt-10 text-[25px] text-[#000000d4] font-mono">
                Your order is successful 😍
            </h5>
            <br />
            <br />
        </div>
    );
};
