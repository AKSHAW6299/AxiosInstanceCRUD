import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`

export async function deleteApi(data) {
    return await axiosInstance.delete(`${URL}/posts/${data}`);
}