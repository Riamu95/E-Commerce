import { CartActionTypes } from "./cartActionType";

export const toggleCartHidden = () => 
({
    type : CartActionTypes.toggleCartHidden
});

export const clearCartItems = () => ({
    type: CartActionTypes.clearCart
});

export const setCartHidden = () => 
({
    type : CartActionTypes.setCartHidden
});

export const onSetCartHidden = () => 
({
    type : CartActionTypes.onHideCart
});

export const addCartItem = (data) => 
({
    type : CartActionTypes.addCartItem,
    payload : data
});

export const removeCartItem = (data) => 
({
    type : CartActionTypes.removeCartItem,
    payload : data
});

export const decrementCartQuantity = (data) => 
({
    type : CartActionTypes.decrementCartItem,
    payload : data
});