import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`


export async function patchApi(queryParam) {
    // console.log('queryParam :', queryParam);

    return await axiosInstance.patch(`${URL}/posts/${queryParam.userId}`, queryParam);
}