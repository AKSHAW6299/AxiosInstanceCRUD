import axios from "axios";

export const axiosInstance = axios.create({
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})