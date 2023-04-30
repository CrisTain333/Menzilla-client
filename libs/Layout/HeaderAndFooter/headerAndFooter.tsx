import { Footer } from '@/libs/Components/Footer/Footer';
import Header from '@/libs/Components/Header/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderAndFooter = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="w-[90%] mx-auto mt-24">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderAndFooter;
