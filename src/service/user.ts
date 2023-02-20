import axios from "axios";
const baseUrl = "https://api.github.com/users";
export const getUserByName = async (str: string) => {
  try {
    const res = await axios.get(`${baseUrl}/${str}`);
    return res.data;
  } catch (error: any) {
    return error?.message;
  }
};
