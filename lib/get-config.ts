// HTTP Helpers
import axios from "axios";
import { apis } from "@apis";

export const getConfig = async (name: string) => {
  const response = await axios.get(apis.getContent(name));
  return response?.data?.data[0]?.content;
};
