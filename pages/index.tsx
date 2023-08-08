import { getAllProduct } from '@/libs/Api';
import Home from '@/libs/modules/home/home';
import React from 'react';

const index = ({ data }: any) => {
    return (
        <div>
            <Home data={data} />
        </div>
    );
};

export default index;

export async function getStaticProps() {
    try {
        const response = await getAllProduct(1);
        const d =
            response?.data && response?.data.sort((a: any, b: any) => b.sold_out - a.sold_out);
        const bestFive = d.slice(0, 8); // Extract the actual data from the response

        return {
            props: {
                data: bestFive
            },
            revalidate: 86400 // Revalidate every 24 hours (in seconds)
        };
    } catch (error) {
        return {
            props: {
                data: [] // You can set a default value here
            },
            revalidate: 86400 // Revalidate every 24 hours (in seconds)
        };
    }
}
