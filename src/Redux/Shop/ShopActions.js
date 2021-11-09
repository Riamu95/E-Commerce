import { shopActionTypes } from "./ShopActionTypes";


export const shopUpdate = () => ({
    type : shopActionTypes.ON_ITEMS_UPDATE
});

export const shopUpdateStart = () => ({
    type : shopActionTypes.UPDATE_COLLECTION_START
});

export const shopUpdateSuccess = (data) => ({
    type : shopActionTypes.UPDATE_COLLECTION_SUCCESS,
    payload : data
});

export const shopUpdateFail = (data) => ({
    type : shopActionTypes.UPDATE_COLLECTION_FAIL,
    error : data
});