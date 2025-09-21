// 1. Import axios
import axios from "axios";

// 2. Configure axios
export const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };
  return await axios(reqConfig)
    .then((req) => {
      return req;
    })
    .catch((err) => {
      return err;
    });
};
