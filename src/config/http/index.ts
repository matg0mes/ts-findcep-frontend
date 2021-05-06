import axios from "axios";
import env from "../environments";

axios.defaults.baseURL = env.baseurl_api;
axios.defaults.headers["Content-Type"] = "application/json";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
