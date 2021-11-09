import { collectionActionTypes } from "./Collection.ActionTypes";


export const fetchCollectionsStart = () => ({
    type : collectionActionTypes.UPDATE_COLLECTION_START
});

export const fetchCollectionSuccess = (data) => ({
    type: collectionActionTypes.UPDATE_COLLECTION_SUCCESS,
    payload : data
});

export const fetchCollectionFailure = ( data) => ({
    type: collectionActionTypes.UPDATE_COLLECTION_FAIL,
    error : data
});