import { configureStore } from '@reduxjs/toolkit';
import dexListReducer from './dexSlice.js';

export const store = configureStore({
  reducer: {
    dex: dexListReducer,
  },
});
