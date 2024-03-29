'use client';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import React from 'react';

const CustomProvider = ({ children }: { children: any }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
