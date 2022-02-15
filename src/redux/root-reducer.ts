import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import searchReducer from "./search/search.reducer";
import { cryptoReducer } from "./crypto/crypto.reducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['crypto']
}

const rootReducer = combineReducers({
    crypto: cryptoReducer,
    search: searchReducer
});

export default persistReducer(persistConfig, rootReducer);