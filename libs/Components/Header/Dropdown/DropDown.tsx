import styles from '@/styles/styles';
import { useRouter } from 'next/router';
import React from 'react';

const DropDown = ({ setDropDown, categoriesData }: any) => {
    const navigate = useRouter();
    const submitHandle = (i: any) => {
        navigate.push(`/products?category=${i.title}`);
        setDropDown(false);
        window.location.reload();
    };
    return (
        <div className="pb-4 w-68 bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
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
                        <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
                    </div>
                ))}
        </div>
    );
};

export default DropDown;
