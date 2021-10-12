import { CartActionTypes } from "./cartActionType";
import { addItemToCart, removeItemFromCart, decrementItemQuantity,  } from "./cart.utils";
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case CartActionTypes.toggleCartHidden :
           
           return {
               ...state,
               hidden: !state.hidden
           };

        case CartActionTypes.setCartHidden :
            
        return {
            ...state,
            hidden: true
        };

        case CartActionTypes.addCartItem : 
           return {
               ...state,
               cartItems : addItemToCart(state.cartItems, action.payload)
           }

           case CartActionTypes.removeCartItem : 
           return {
               ...state,
               cartItems : removeItemFromCart(state.cartItems, action.payload)
           }

           case CartActionTypes.decrementCartItem : 
           return {
               ...state,
               cartItems : decrementItemQuantity(state.cartItems, action.payload)
           }

        default:
            return state;
    }
};

export default cartReducer;