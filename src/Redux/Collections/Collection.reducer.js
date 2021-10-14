import { collectionActionTypes } from "./Collection.ActionTypes";

const INITIAL_STATE = {
    collections: null 
};


const collectionReducer = (state=INITIAL_STATE, action) => 
{
    switch(action.type)
    {
      case collectionActionTypes.UPDATE_COLLECTION_TYPES : 
        return {
          ...state,
          collections : action.payload
        };
        default :
        return {
            ...state
        };
    }
}

export default collectionReducer;