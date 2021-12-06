import Axios from "axios";

const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/users'
// const dbUrl = "http://localhost:3001/api/users";
export const addTest = (res) => {
  Axios.post(`${dbUrl}`, res)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllPost = () =>
  Axios.get(`${dbUrl}/published`).then(function (res) {
    return res.data;
  });

export const deletePost = (res) =>
  Axios.delete(`${dbUrl}/${res.id}`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const updatePost = (res) =>
  Axios.put(`${dbUrl}/${res.id}`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
