import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import {   collectionActionTypes } from './Collection.ActionTypes';
import { firestore, convertCollectionTypeSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from './CollectionActions';


function* collectionUpdate()
{
    
    try {
        const collectionRef =  yield firestore.collection('CollectionTypes');
        const snapshot = yield collectionRef.get();
        const colllections = yield call(convertCollectionTypeSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(colllections));
    }
    catch (err) {
        yield put(fetchCollectionFailure({ error: err}));
    }
}

function* onCollectionUpdateStart()
{
    yield takeLatest(collectionActionTypes.UPDATE_COLLECTION_START,collectionUpdate);
}

export function* collectionSaga() {
    yield all([call(onCollectionUpdateStart)])
};
