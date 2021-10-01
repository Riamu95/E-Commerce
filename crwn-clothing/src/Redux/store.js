import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import { persistedReducer } from "./root-reducer";
import logger from 'redux-logger';

const middlewares = [logger];



export const store =  createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

