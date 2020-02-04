import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // configuration object
    baseURL: "BackEndUrl",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
