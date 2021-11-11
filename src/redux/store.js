import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reduser";

export const initStore = {
  isLogin: false,
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});