import React from "react";
import Api from "./ZohoAPIConfig";

function useZohoAPIs() {
  const PostZohoCustomer = (formData) => {
    return Api.post(
      "https://www.zohoapis.com/crm/v2/functions/customers/actions/execute?auth_type=apikey&zapikey=1003.98e95256671e37e14a695ea60fbdce04.9f0168e5de5e8c3fc475d1b92243c893",
      formData
    );
  };

  return { PostZohoCustomer };
}

export default useZohoAPIs;
