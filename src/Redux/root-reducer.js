import { combineReducers } from "redux";
import userReducer from "./User/user-reducer";
import cartReducer from "./Cart/cart-reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import collectionReducer from './Collections/Collection.reducer';
import shopReducer from './Shop/shop.reducer';

const resistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    collection : collectionReducer,
    shopCollection : shopReducer
});


export const  persistedReducer = persistReducer(resistConfig, rootReducer);


