
export const logIn = (result) => {
    return {
      type: "LOG_IN",
      payload: result,
      
    };
  };
export const addUser = (result) => {
    return {
      type: "ADD_USER",
      payload: result,
      
  };
};

export const getPosts = (result) => {
  return {
    type: 'GET_POSTS',
    payload: result,
  };
};
