import Header from '@/libs/Components/Header/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderAndFooter = ({ children }: LayoutProps) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            {children}
        </div>
    );
};

export default HeaderAndFooter;
