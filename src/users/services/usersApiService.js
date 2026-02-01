import axios from "axios";

const apiUrl = "https://localhost:7230/user";

const createNewUser = async (user) => {
  try {
    const { data } = await axios.post(apiUrl, user);
    return data;
  } catch (error) {
    const message = error.response?.data?.errors
      ? Object.values(error.response.data.errors).flat().join(", ")
      : error.response?.data?.title || "Request failed";

    throw new Error(message);
  }
};

const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (id, normalizedExistingUser) => {
  try {
    const { data } = await axios.put(`${apiUrl}/${id}`, normalizedExistingUser);
    return data;
  } catch (error) {
    const message = error.response?.data?.errors
      ? Object.values(error.response.data.errors).flat().join(", ")
      : error.response?.data?.title || "Request failed";

    throw new Error(message);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    throw new Error(error.message.data);
  }
};

const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message.data);
  }
};

export { createNewUser, getUserData, updateUser, getAllUsers, deleteUser };
