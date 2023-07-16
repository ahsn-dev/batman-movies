import axios from "axios";

const publicAxios = axios.create({
  baseURL: "https://www.omdbapi.com",
});

publicAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

publicAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export default publicAxios;
