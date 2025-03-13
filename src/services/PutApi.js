import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`


export async function putApi(queryParam) {
    console.log('queryParam :', queryParam);
    
    return await axiosInstance.put(`${URL}/posts/${queryParam.id}`, queryParam);
}