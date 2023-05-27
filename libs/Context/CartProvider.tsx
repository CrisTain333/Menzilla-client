import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface CartContextType {
    addToCart: (product: any) => any;
    getCartItems: () => any;
    cartLength: any;
    handleAddToCart: any;
    cartItems: any;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartLength, setCartLength] = useState(0);
    const [cartItems, setCartItems] = useState<any>([]);
    useEffect(() => {
        // Update the cart length in the UI whenever the cart changes
        const cartItems = getCartItems();
        setCartItems(cartItems);
        setCartLength(cartItems.length);
    }, [cartLength]);
    // Function to add a product to the cart in local storage
    const addToCart = (product: any) => {
        // Check if the cart already exists in local storage
        let cart = localStorage.getItem('cartItem');
        if (!cart) {
            // If the cart doesn't exist, create a new one
            cart = JSON.stringify([{ product, quantity: 1 }]);
            localStorage.setItem('cartItem', cart);
        } else {
            // If the cart exists, check if the product already exists in it
            const cartItems = JSON.parse(cart);
            const existingItem = cartItems.find((item: any) => item.product._id === product._id);

            if (existingItem) {
                // If the product already exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If the product doesn't exist, add it to the cart
                toast.success('Product Added');
                cartItems.push({ product, quantity: 1 });
            }

            // Update the cart in local storage
            localStorage.setItem('cartItem', JSON.stringify(cartItems));
        }
    };

    // Function to get items from the cart in local storage
    const getCartItems = () => {
        const cart = localStorage.getItem('cartItem');
        if (!cart) {
            return [];
        }

        return JSON.parse(cart);
    };

    const handleAddToCart = (product: any) => {
        addToCart(product);
        setCartLength((prevLength) => prevLength + 1);
    };

    return (
        <CartContext.Provider
            value={{ addToCart, getCartItems, cartLength, handleAddToCart, cartItems }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
