import { Axios } from "axios";

const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/'
export const addTest = (res) => {
    Axios.post(`${dbUrl}users`, res)
    .then(function (response) {
        console.log(response);
    })
    .catch( function (error) {
        console.log(error);
    })
}