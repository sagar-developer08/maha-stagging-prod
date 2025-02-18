import React from "react";
import Api from "./config";

function useAuthApi() {
  const PostRegister = (formData) => {
    return Api.post("/register", formData);
  };
  const PostLogin = (formData) => {
    return Api.post("/login", formData);
  };
  const PostUploadId = (formData) => {
    return Api.post("/upload-ids", formData);
  };
  const PostVerifyOTP = (formData) => {
    return Api.post("/verify-otp", formData);
  };

  const PostForgotPass = (formData) => {
    return Api.post("/forgotPassword", formData);
  };
  const PostResetPass = (formData) => {
    return Api.post("/resetPassword", formData);
  };

  return {
    PostRegister,
    PostLogin,
    PostUploadId,
    PostVerifyOTP,
    PostForgotPass,
    PostResetPass,
  };
}

export default useAuthApi;
