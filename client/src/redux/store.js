import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: userReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


export const store = configureStore({
    reducer: persistReducer,
    middleware: (getdefaultMiddleware) => getdefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);