import { call, all, takeLatest, put } from "redux-saga/effects";

import { CartActionTypes } from "./cartActionType";
import { clearCartItems, setCartHidden } from "./cart-actions";
import { userActionTypes } from "../User/UserAcionTypes";

export function* clearCart() {
  yield put(clearCartItems());
}

export function* hideCart() {
  yield put(setCartHidden());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.USER_SIGN_OUT_SUCCESS, clearCart);
}

export function* onHideCart() {
  yield takeLatest(CartActionTypes.onHideCart, hideCart);
}

export function* CartSagas() {
  yield all([call(onSignOutSuccess), call(onHideCart)]);
}
