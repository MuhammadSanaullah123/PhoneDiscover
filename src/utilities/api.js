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

export const getCalls = async () => {
  try {
    return await axios.get(`${base_url}/calls`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getCallsCustom = async (offset) => {
  try {
    return await axios.get(`${base_url}/calls?offset=${offset}&limit=10`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
