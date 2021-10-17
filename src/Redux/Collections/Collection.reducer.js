import { collectionActionTypes } from "./Collection.ActionTypes";

const INITIAL_STATE = {
    collections: null,
    isFetching : false,
    error : null
};


const collectionReducer = (state=INITIAL_STATE, action) => 
{
    switch(action.type)
    {
      case collectionActionTypes.UPDATE_COLLECTION_START : 
        return {
          ...state,
          isFetching : true
        };
        case collectionActionTypes.UPDATE_COLLECTION_SUCCESS : 
          return {
            ...state,
            isFetching : false,
            collections : action.payload
          };
        case collectionActionTypes.UPDATE_COLLECTION_FAIL : 
          return {
            ...state,
            isFetching : false,
            error : action.payload
          };
        default :
        return {
            ...state
        };
    }
}

export default collectionReducer;