// @packages
import axios from "axios";

const addRequestInterceptors = () => {
  axios.interceptors.request.use(
    (request) => {
      request.headers = request.headers ?? {};

      request.headers["Content-Type"] = "application/json";

      return request;
    },
    (error) => {
      throw error;
    }
  );
};

const addResponseInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      if (!response?.config) {
        return response;
      }

      return response.data;
    },
    (error) => {
      throw error;
    }
  );
};

export const addAjaxInterceptors = () => {
  addRequestInterceptors();
  addResponseInterceptors();
};
