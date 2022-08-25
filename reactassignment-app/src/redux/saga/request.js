import axios from "axios";
export function getPerson() {
    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"

    });
};