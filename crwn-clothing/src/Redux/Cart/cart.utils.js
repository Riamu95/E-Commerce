export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.name === cartItemToAdd.name);

    if(existingCartItem) { 
        return cartItems.map(cartItem =>
            cartItem.name === cartItemToAdd.name ? 
            { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
 
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1}];
}


export const removeItemFromCart = (cartItems, removableItem) => {
    console.log('items',cartItems)
    console.log('items',cartItems)
    const existingCartItem = cartItems.find( cartItem => cartItem.id === removableItem);

    if(existingCartItem) { 
        return cartItems.filter(item => item.id !== removableItem);
    }
}