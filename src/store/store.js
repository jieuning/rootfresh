import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import cart from "./cartSlice";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["cart"]
};

const rootReducer =  combineReducers({
    cart: cart.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
      }),
      devTools: true,
});

export default store;