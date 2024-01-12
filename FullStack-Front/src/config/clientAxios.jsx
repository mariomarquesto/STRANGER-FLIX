import axios from "axios";

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    "Content-type": "application/json; charset = UTF-8",
    token: localStorage.getItem("token"),
  },
});
export default clientAxios;
