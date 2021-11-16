import { shopActionTypes } from './ShopActionTypes';

const INITIAL_STATE = {
    collections : null,
    isFetching : false,
    error : null
};

const shopReducer = (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case shopActionTypes.UPDATE_ITEMS_START:
            return {
                ...state,
                isFetching : true
            };
        case shopActionTypes.UPDATE_ITEMS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching : false
            };
        case shopActionTypes.UPDATE_ITEMS_FAIL:
            return {
                ...state,
                error : action.payload,
                isFetching : false
            };
        default:
            return {
                ...state

        };
    }
}

export default shopReducer;