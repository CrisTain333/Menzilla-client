import React, { createContext, useContext, useEffect, useState } from 'react';
interface ICartContextValue {
    cartItems: any;
}

const CartContext = createContext<ICartContextValue | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within an AuthProvider');
    }
    return context;
}

export function CartProvider({ children }: any) {
    const [cartItems, setCartItems] = useState<any>();

    useEffect(() => {
        // Retrieve the cart items from local storage
        const cartItemsJson = localStorage.getItem('shoppingCart');
        const cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];

        // Update the item count
        setCartItems(cartItems.length);
    }, []);

    // () => {
    //     const cartItemsJson = localStorage.getItem('shoppingCart');
    //     return cartItemsJson ? JSON.parse(cartItemsJson) : [];
    // };

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    }, [cartItems]);

    return <CartContext.Provider value={{ cartItems }}>{children}</CartContext.Provider>;
}
