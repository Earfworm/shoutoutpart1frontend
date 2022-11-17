import Shoutout from "../models/Shoutout";
import axios from "axios";
// const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";
export const getAllShoutouts = (): Promise<Shoutout[]> => {
  return axios
    .get("http://127.0.0.1:5001/shoutouts-5a7d1/us-central1/api/shoutouts")
    .then((res) => res.data);
};
