import { userActionTypes } from "./UserAcionTypes";

const INITIAL_STATE = {
    currentUser: null,
    error : null
};

const userReducer = ( state = INITIAL_STATE ,  action ) => 
{   
    switch (action.type)
    {
        case userActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser : action.payload
            };
        case userActionTypes.SIGNIN_FAIL:
            return {
                ...state,
                currentUser: null,
                error : action.payload
            };
        case userActionTypes.USER_SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            };
        case userActionTypes.USER_SIGN_OUT_FAIL:
            return {
                ...state,
                currentUser: null,
                error : action.payload
            };
        case userActionTypes.USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser : action.payload
            };
        default:
            return state;
    }
};

export default userReducer;