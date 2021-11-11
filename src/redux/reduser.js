import { initStore } from "./store";

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};