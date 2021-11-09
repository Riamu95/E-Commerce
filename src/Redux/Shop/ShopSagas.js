import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { shopActionTypes } from './ShopActionTypes';
import { shopUpdateStart, shopUpdateSuccess, shopUpdateFail} from './ShopActions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

function* onItemsUpdate()
{
  
    yield put(shopUpdateStart());
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

function* itemsStart()
{
    yield takeLatest(shopActionTypes.ON_ITEMS_UPDATE, onItemsUpdate);
};

export function* shopSaga() {
      yield all([call(itemsStart)])
};