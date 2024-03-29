import styles from '@/styles/styles';
import { useRouter } from 'next/router';
import React from 'react';

const DropDown = ({ setDropDown, categoriesData }: any) => {
    const navigate = useRouter();
    const submitHandle = (i: any) => {
        navigate.push(`/product?category=${i.title}`);
        setDropDown(false);
    };
    return (
        <div className="pb-5 w-64 -ml-6 bg-[#fff] absolute z-30 rounded-b-md shadow-md">
            {categoriesData &&
                categoriesData.map((i: any, index: any) => (
                    <div
                        key={index}
                        className={`${styles.noramlFlex}`}
                        onClick={() => submitHandle(i)}
                    >
                        <img
                            src={i.image_Url}
                            style={{
                                width: '25px',
                                height: '25px',
                                objectFit: 'contain',
                                marginLeft: '10px',
                                userSelect: 'none'
                            }}
                            alt=""
                        />
                        <h3 className="m-3 cursor-pointer select-none text-black">{i.title}</h3>
                    </div>
                ))}
        </div>
    );
};

export default DropDown;
