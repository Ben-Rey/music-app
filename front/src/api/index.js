import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.75:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
