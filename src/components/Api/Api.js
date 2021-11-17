import  Axios  from "axios";

const dbUrl = 'http://localhost:3001/api/users'
export const addTest = (res) => {
    Axios.post(`${dbUrl}`, res)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAllPost = () =>
  Axios.get(`${dbUrl}/published`).then(function (res) {
    return res.data;
  });