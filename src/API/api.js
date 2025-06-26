import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-csrftoken";
const client = axios.create(
  {
    baseURL: "http://192.168.1.7:8000/",
  }

  // {
  //     baseURL: 'http://192.168.1.7:8000/'
  // }
  //
);

export default client;
