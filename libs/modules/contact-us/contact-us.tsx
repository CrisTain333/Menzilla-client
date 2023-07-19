import Contact from '@/libs/Components/Contact/Contact';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import Head from 'next/head';
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            {/* Head Section */}
            <Head>
                <title>Contact-Us</title>
                <meta name="description" content={'Contact-Us Page Of Menzilla'} />
            </Head>
            <HeaderAndFooter>
                <Contact />
            </HeaderAndFooter>
        </div>
    );
};

export default ContactUs;
