import { httpAxios } from "../helper/httpHelper";

export async function fetchUsers() {
  try {
    const { data } = await httpAxios.get("/api/get_users");
    return data;
  } catch (error) {
    throw new Error("Fetch users failed");
  }
}
