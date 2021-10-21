import { userActionTypes } from "./UserAcionTypes";

const INITIAL_STATE = {
    currentUser: null,
    error : null
};

const userReducer = ( state = INITIAL_STATE ,  action ) => 
{   
    switch (action.type)
    {
        case userActionTypes.EMAIL_START_SIGNIN_SUCCESS:
        case userActionTypes.GOOGLE_START_SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser : action.payload
            };
        case userActionTypes.EMAIL_START_SIGNIN_FAIL:
        case userActionTypes.GOOGLE_START_SIGNIN_FAIL:
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
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : action.payload
            };
        default:
            return state;
    }
};

export default userReducer;