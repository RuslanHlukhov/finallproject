export const getInfoUser = () => {
  const userData = window.localStorage.getItem('user');
  if (userData) {
    const userInfo = JSON.parse(userData);
    return userInfo;
  }
};
