import { CartActionTypes } from "./cartActionType";

const INITIAL_STATE = {
    hidden : true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.toggleCartHidden :
           return {
               ...state,
               hidden: !state.hidden
           };
        default:
            return state;
    }
};

export default cartReducer;