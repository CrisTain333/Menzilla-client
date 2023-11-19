import NewNavbar from '@/components/ui/NewNavbar/NewNavbar';
import { Footer } from '@/libs/Components/Footer/Footer';
import SimpleNav from '@/libs/Components/Header/SimpleNav';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderAndFooter = ({ children }: LayoutProps) => {
    return (
        <div>
            {/* <Header /> */}
            <NewNavbar />
            <div className="mt-14">
                <div className="hidden md:block">
                    <SimpleNav />
                </div>
            </div>
            <div className="w-[90%] mx-auto mt-16 md:mt-10">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderAndFooter;
