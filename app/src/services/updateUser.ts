import axios from "axios";
import { UserInterface } from "../interfaces/user.interface";

export const updateUser = async (id: string, body: UserInterface) => {
  const url = `http://localhost:4000/user/${id}`;
  const { status, statusText } = await axios.put(url, body);
  return { status, statusText };
};
