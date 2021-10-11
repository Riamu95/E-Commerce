import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import { persistedReducer } from "./root-reducer";
import logger from 'redux-logger';

const middlewares = [];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

export const store =  createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
