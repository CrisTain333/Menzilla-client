import { Footer } from '@/libs/Components/Footer/Footer';
import Header from '@/libs/Components/Header/Header';
import SimpleNav from '@/libs/Components/Header/SimpleNav';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderAndFooter = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="mt-14">
                <SimpleNav />
            </div>
            <div className="w-[90%] mx-auto mt-10">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderAndFooter;
