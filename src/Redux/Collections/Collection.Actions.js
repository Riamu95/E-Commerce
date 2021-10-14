import { collectionActionTypes } from "./Collection.ActionTypes";

export const updateCollectionTypes = (data) => ({
            type: collectionActionTypes.UPDATE_COLLECTION_TYPES,
            payload : data
    });
