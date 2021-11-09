import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { shopActionTypes } from './ShopActionTypes';
import { shopUpdateSuccess, shopUpdateFail} from './ShopActions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

function* ItemsUpdate()
{
    try {
        const collectionRef = yield firestore.collection('Collections');
        const snap = yield collectionRef.get();
        const collections = yield call(convertCollectionsSnapshotToMap, snap);
        yield put(shopUpdateSuccess(collections));
    }
    catch (err)
    {
        yield put(shopUpdateFail(err))
    }
};

function* onItemsUpdate()
{
    yield takeLatest(shopActionTypes.UPDATE_ITEMS_START, ItemsUpdate);
};

export function* shopSaga() {
      yield all([call(onItemsUpdate)])
};