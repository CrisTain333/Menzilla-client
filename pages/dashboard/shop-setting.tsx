import Settings from '@/libs/modules/settings/settings';
import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Settings - Dashboard</title>
            </Head>
            <Settings />
        </div>
    );
};

export default index;
