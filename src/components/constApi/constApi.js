import  Axios  from "axios";

const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/'
export const addTest = (res) => {
    Axios.post(`${dbUrl}users`, res)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}