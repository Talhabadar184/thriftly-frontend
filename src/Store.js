// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// import authReducer from "./Features/authSlice";
import productReducer from "./Features/producSlice";
import cartReducer from "./Features/cartSlice";
// import orderReducer from "./Features/orderSlice";
// import wishlistReducer from "./Features/wishlistSlice";
//  import userReducer from "./Features/userSlice";

// ✅ Combine reducers
const rootReducer = combineReducers({
  // auth: authReducer,
  products: productReducer,
  cart: cartReducer,
//   orders: orderReducer,
//   wishlist: wishlistReducer,
  //  user: userReducer,
});

// ✅ Persist only slices that make sense (e.g., auth, cart, wishlist)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "wishlist"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

// ✅ Persistor
export const persistor = persistStore(store);
