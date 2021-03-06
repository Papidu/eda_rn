import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categorySlice';
import cartReducer from './features/counterInBascketSlice';
import dataMapReducer from './features/dataMapSlice';
export const store = configureStore({
  reducer: {
      category: categoryReducer,
      cart: cartReducer,
      dataMap: dataMapReducer,
  },
})