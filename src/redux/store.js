import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage/session"
import { PersistGate } from "redux-persist/integration/react"
import {rootReducer} from "./reducers/index"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const new_reducer = persistReducer(persistConfig, rootReducer) ;


const store = configureStore({
    reducer: new_reducer,
    devTools: true,
});

const persistor = persistStore(store);

const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default DataProvider