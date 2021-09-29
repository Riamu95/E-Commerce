import { CartActionTypes } from "./cartActionType";

export const toggleCartHidden = () => 
({
    type : CartActionTypes.toggleCartHidden
});

export const addCartItem = (data) => 
({
    type : CartActionTypes.addCartItem,
    payload : data
});