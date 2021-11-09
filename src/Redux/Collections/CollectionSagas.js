import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import {   collectionActionTypes } from './Collection.ActionTypes';
import { firestore, convertCollectionTypeSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionsStart, fetchCollectionSuccess, fetchCollectionFailure } from './CollectionActions';


function* onCollectionUpdateStart()
{
    const collectionRef =  yield firestore.collection('CollectionTypes');
    yield put(fetchCollectionsStart())
    
    try {
        const snapshot = yield collectionRef.get();
        const colllections = yield call(convertCollectionTypeSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(colllections));
    }
    catch (err) {
        yield put(fetchCollectionFailure({ error: err}));
    }
}

function* CollectionStart()
{
    yield takeLatest(collectionActionTypes.ON_UPDATE_COLLECTION,onCollectionUpdateStart);
}

export function* collectionSaga() {
    yield all([call(CollectionStart)])
};
