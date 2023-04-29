import Header from '@/libs/Components/Header/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderAndFooter = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="w-[90%] mx-auto mt-10">{children}</div>
        </div>
    );
};

export default HeaderAndFooter;
