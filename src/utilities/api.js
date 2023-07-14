import axios from "axios";

const base_url = "https://frontend-test-api.aircall.io";

export const login = async (name, password) => {
  try {
    return await axios.post(`${base_url}/auth/login`, {
      username: name,
      password: password,
    });
  } catch (error) {
    console.error(error);
  }
};
