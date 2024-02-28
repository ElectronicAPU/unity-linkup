import { httpAxios } from "../helper/httpHelper";

export async function signUp(userData) {
  try {
    const { data } = await httpAxios.post(`/api/signup`, { ...userData });
  
      return data;
   
  } catch (error) {
    throw new Error(error.message);
  }
}
