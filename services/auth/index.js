import axios from "axios";
import { host_url, register_endpoint } from "./endpoints";

export const register_api = async () => {
    
  try {
    const response_api = axios.post(host_url + register_endpoint);
    return response_api;
  } catch (error) {
    throw error;
  }
};
