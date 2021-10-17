import { firestore } from "../firebase/firebase.utils";

export const fetchCollectionsStart = (type) => ({
    type : type.UPDATE_COLLECTION_START
});


export const fetchCollectionSuccess = (type, data) => ({
    type: type.UPDATE_COLLECTION_SUCCESS,
    payload : data
});

export const fetchCollectionFailure = (type, data) => ({
    type: type.UPDATE_COLLECTION_FAIL,
    error : data
});


export const updateCollectionAsync = (colectionID, type, convertSnapshotToMap) => {
    
    return (dispatch) => {

        const collectionRef = firestore.collection(colectionID);
        dispatch(fetchCollectionsStart(type));

        collectionRef.get().then(async (snapshot) => {
            const collections = await convertSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(type,collections));
        }).catch(err => dispatch(fetchCollectionFailure(type,err)));
    };
};