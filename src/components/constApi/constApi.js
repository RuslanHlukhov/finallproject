import { Axios } from "axios";

const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/'
export const addTest = () => {
    Axios.post(`${dbUrl}users`, {
        title: title,
        text: text,
    }).then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error.response);
    })
}