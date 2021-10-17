import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections : null,
    isFetching : false,
    error : null
};

const shopReducer = (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case ShopActionTypes.UPDATE_COLLECTION_START:
            return {
                ...state,
                isFetching : true
            };
        case ShopActionTypes.UPDATE_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching : false
            };
        case ShopActionTypes.UPDATE_COLLECTION_FAIL:
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