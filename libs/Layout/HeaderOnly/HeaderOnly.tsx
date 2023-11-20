import NewNavbar from '@/components/ui/NewNavbar/NewNavbar';
import SimpleNav from '@/libs/Components/Header/SimpleNav';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const HeaderOnly = ({ children }: LayoutProps) => {
    return (
        <div>
            {/* <Header /> */}
            <NewNavbar />
            <div className="hidden md:block mt-14">
                <SimpleNav />
            </div>
            <div className="w-[90%] mx-auto mt-20 md:mt-10">{children}</div>
        </div>
    );
};

export default HeaderOnly;
