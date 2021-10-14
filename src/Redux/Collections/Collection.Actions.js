import { collectionActionTypes } from "./Collection.ActionTypes";
import { firestore, convertCollectionTypeSnapshotToMap } from "../../firebase/firebase.utils";

export const updateCollectionTypes = (data) => ({
            type: collectionActionTypes.UPDATE_COLLECTION_TYPES,
            payload : data
});

export const fetchCollectionStart = () => ({
        type : collectionActionTypes.START_COLLECTION_UPDATE
});

export const fetchCollectionSuccess = (data) => ({
        type : collectionActionTypes.START_COLLECTION_UPDATE_SUCCESS,
        payload : data
});

export const fetchCollectionFailure = (data) => ({
        type : collectionActionTypes.START_COLLECTION_UPDATE_FAIL,
        error : data
});

export const updateCollectionStartAsync = () => {
        return (dispatch) => {
                
                const collectionRef = firestore.collection('CollectionTypes')
                dispatch(fetchCollectionStart())
                
                collectionRef.get().then( snap => {
                        
                     const collections =  convertCollectionTypeSnapshotToMap(snap);
                     dispatch(fetchCollectionSuccess(collections));
                })
                .catch(err => dispatch(fetchCollectionFailure(err)));
        }
};
