import { toast } from 'react-hot-toast';

export const addToCart = (item: any) => {
    const existingItemsJson = localStorage.getItem('shoppingCart');
    let cartItems = [];

    if (existingItemsJson) {
        // Parse the existing items if any
        cartItems = JSON.parse(existingItemsJson);

        // Check if the item already exists in the cart
        const existingItem = cartItems.find((cartItem: any) => cartItem._id === item._id);
        if (existingItem) {
            // If the item already exists, increment the quantity
            existingItem.quantity += 1;
        } else {
            // If the item doesn't exist, add it to the cart
            item.quantity = 1;
            cartItems.push(item);
        }
    } else {
        toast.success('product added');
        item.quantity = 1;
        // If there are no existing items, add the item to the cart
        cartItems.push(item);
    }

    // Save the updated cart items to local storage
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));

    // let shoppingCart: any = {};

    // //get the shopping cart from local storage
    // const storedCart = localStorage.getItem('shopping-cart');
    // if (storedCart) {
    //     shoppingCart = JSON.parse(storedCart);
    // }

    // // add quantity
    // const quantity = shoppingCart[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    // } else {
    //     toast.success('product added');
    //     shoppingCart[id] = 1;
    // }
    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
