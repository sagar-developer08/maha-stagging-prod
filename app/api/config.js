import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export const axios = setupCache(Axios);

const Api = axios.create({
  baseURL:
    // "http://localhost:3000/api",
    // "https://o5whtqeiw2.execute-api.us-east-1.amazonaws.com/stagging/api",
    "https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api",
  timeout: 60000,
});

Api.interceptors.request.use(
  (request) => {
    if (request) {
      //perform the manipulation here and change the request object
    }
    return {
      ...request,
      onUploadProgress: function (progressEvent) {
        console.log(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    };
  },
  (error) => {
    console.log("interceptor request ERROR", error);
    return error?.request;

    return Promise.reject(error.message);
  }
);

Api.interceptors.response.use(
  (response) => {
    if (response) {
      //perform the manipulation here and change the response object
    }
    return response;
  },
  (error) => {
    console.log("interceptor response ERROR", error);
    return error?.response;

    if (error.response?.status === 401) {
    }
    // return Promise.reject(error.message);
  }
);

export default Api;
