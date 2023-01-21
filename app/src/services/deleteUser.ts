import axios from "axios";

export const deleteUser = async (id: string) => {
  const url = `http://localhost:4000/user/${id}`;
  const { status, statusText } = await axios.delete(url);
  return { status: status, message: statusText };
};
