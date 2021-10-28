import { all, call } from 'redux-saga/effects';
import { CartSagas } from './Cart/Cart-Sagas';
import { userSagas } from './User/User-Sagas';

export function* RootSaga()
{
    yield all([call(userSagas), call(CartSagas)]);
}