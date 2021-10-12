import { CartActionTypes } from "./cartActionType";

export const toggleCartHidden = () => 
({
    type : CartActionTypes.toggleCartHidden
});


export const setCartHidden = () => 
({
    type : CartActionTypes.setCartHidden
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