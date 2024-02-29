import { httpAxios } from "../helper/httpHelper";

export async function signUp(userData) {
  try {
    const { data } = await httpAxios.post(`/api/signup`, { ...userData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signIn(userData) {
  try {
    const { data } = await httpAxios.post(`/api/signin`, { ...userData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function loggedInUser() {
  try {
    const { data } = await httpAxios.get("/api/user");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
