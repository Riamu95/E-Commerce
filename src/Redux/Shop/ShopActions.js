import { shopActionTypes } from "./ShopActionTypes";

export const shopUpdateStart = () => ({
    type : shopActionTypes.UPDATE_ITEMS_START
});

export const shopUpdateSuccess = (data) => ({
    type : shopActionTypes.UPDATE_ITEMS_SUCCESS,
    payload : data
});

export const shopUpdateFail = (data) => ({
    type : shopActionTypes.UPDATE_ITEMS_FAIL,
    error : data
});