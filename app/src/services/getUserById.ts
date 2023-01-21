import axios from "axios";

export const getUserById = async (id: string) => {
  const url = `http://localhost:4000/user/${id}`;
  const { data } = await axios.get(url);
  return data;
};
