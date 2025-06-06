import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, CartReducer)


const Store=configureStore({
    reducer:{
        mycart:persistedReducer 
    }
})
export default Store;
export const persistor = persistStore(Store);