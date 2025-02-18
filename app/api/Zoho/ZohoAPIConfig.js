import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { axios } from "../config";

const Api = axios.create({
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
