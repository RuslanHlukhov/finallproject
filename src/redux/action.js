
export const logIn = (result) => {
    return {
      type: "LOG_IN",
      payload: result,
      
    };
  };
  export const token = (result) => {
    return {
      type: "TOKEN",
      payload: result,
      
  };
};

export const addUser = (result) => {
    return {
      type: "ADD_USER",
      payload: result,
      
  };
};
