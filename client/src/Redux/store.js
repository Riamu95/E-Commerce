import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import { persistedReducer } from "./root-reducer";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import thunk from "redux-thunk";

import { RootSaga } from "./RootSaga";

const middlewares = [];


const sagaMiddleware = createSagaMiddleware();

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

middlewares.push(thunk);
middlewares.push(sagaMiddleware);

export const store =  createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);

