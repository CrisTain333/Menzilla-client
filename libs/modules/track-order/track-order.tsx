import TrackOrderDetails from '@/libs/Components/Profile/TrackOrder/TrackOrderDetails';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const TrackOrder = () => {
    return (
        <div>
            <HeaderAndFooter>
                <TrackOrderDetails />
            </HeaderAndFooter>
        </div>
    );
};

export default TrackOrder;
