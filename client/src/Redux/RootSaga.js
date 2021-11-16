import { all, call } from 'redux-saga/effects';
import { CartSagas } from './Cart/Cart-Sagas';
import { userSagas } from './User/User-Sagas';
import { collectionSaga } from './Collections/CollectionSagas';
import { shopSaga } from './Shop/ShopSagas';

export function* RootSaga()
{
    yield all([call(userSagas), call(CartSagas), call(collectionSaga), call(shopSaga)]);
}