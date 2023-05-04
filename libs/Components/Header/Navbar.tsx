import { navItems } from '@/libs/common/constant/Data';
import styles from '@/styles/styles';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className={`block 800px:${styles.noramlFlex}`}>
            {navItems &&
                navItems.map((i, index) => (
                    <div key={index} className="flex">
                        <Link
                            href={i.url}
                            className={`${'text-black 800px:text-[#fff]'} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                        >
                            {i.title}
                        </Link>
                    </div>
                ))}
        </div>
    );
};
export default Navbar;
