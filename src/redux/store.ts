import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [logger];


export const store = createStore(rootReducer, applyMiddleware(thunk,...middlewares));

export const persistor = persistStore(store);

export default {store, persistStore};