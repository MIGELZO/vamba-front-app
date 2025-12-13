import axios from "axios";

const apiUrl = "https://localhost:7230/user";

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
    throw new Error(error.message.data);
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

export { getUserData, updateUser, getAllUsers, deleteUser };
