import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`


export async function putApi(queryParam) {
    // queryParam is a json body/ json object!
    // {
    //     "id": 1,
    //     "title": "Rohit Sharma",
    //     "body": "Dummy Data",
    //     "userId": 1
    // }
    // console.log('queryParam :', queryParam);

    return await axiosInstance.put(`${URL}/posts/${queryParam.id}`, queryParam);
}