import { CartActionTypes } from "./cartActionType";
import { addItemToCart } from "./cart.utils";
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

        case CartActionTypes.addCartItem : 
           return {
               ...state,
               cartItems : addItemToCart(state.cartItems, action.payload)
           }

        default:
            return state;
    }
};

export default cartReducer;