import { initStore } from "./store";

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogin: action.payload };
      case 'GET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
