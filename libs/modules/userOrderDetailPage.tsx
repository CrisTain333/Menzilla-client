import React from 'react';
import HeaderAndFooter from '../Layout/HeaderAndFooter/headerAndFooter';
import UserOrderDetails from '../Components/Profile/UserOrderDetails';

const UserOrderDetailPage = () => {
    return (
        <div>
            <HeaderAndFooter>
                <UserOrderDetails />
            </HeaderAndFooter>
        </div>
    );
};

export default UserOrderDetailPage;
