import { useCallback, useState } from "react";
import {
  getAllUsers,
  getUserData,
  updateUser,
} from "../services/usersApiService";
import ROUTES from "../../routs/routsModel";
// import normalizeUser from "../helpers/normalization/normalizedUser";
// import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
// import normalizedExistingUser from "../helpers/normalization/normalizedExistingUser";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  // const { snackbarActivation } = useSnackbar();
  const [existingUser, setExistingUser] = useState([]);

  // const handleSignup = useCallback(
  //   async (userFromClient) => {
  //     setIsLoading(true);
  //     try {
  //       const normalizedUser = normalizeUser(userFromClient);
  //       await signUpService(normalizedUser);
  //       await handleLogin(
  //         {
  //           email: userFromClient.email,
  //           password: userFromClient.password,
  //         },
  //         true
  //       );
  //     } catch (error) {
  //       setError(error.message);
  //       snackbarActivation("error", error.message, "filled");
  //     }
  //     setIsLoading(false);
  //   },
  //   [handleLogin, snackbarActivation]
  // );

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleUpdateUser = useCallback(
    async (user, userFromClient) => {
      setIsLoading(true);

      try {
        // const normalizedUser = await updateUser(
        //   user._id
        //   normalizedExistingUser(userFromClient)
        // );
        // setExistingUser(normalizedUser);
        // snackbarActivation(
        //   "success",
        //   `${normalizedUser.name.first} your details has been successfully updated`
        // );
      } catch (error) {
        setError(error.message);
      }
      navigate(ROUTES.ROOT);
      setIsLoading(false);
    },
    [navigate]
    // [snackbarActivation, navigate]
  );

  const handleGetAllUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const usersData = await getAllUsers();
      setIsLoading(false);
      return usersData;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleDeleteUser = useCallback(
    async (user) => {
      setIsLoading(true);

      try {
        const data = await updateUser(user._id);
        // snackbarActivation(
        //   "success",
        //   `You deleted user:${user.name.first} successfully`
        // );
        return data;
      } catch (error) {
        setError(error.message);
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
    []
    // [snackbarActivation]
  );

  return {
    error,
    isLoading,
    existingUser,
    handleGetUser,
    handleUpdateUser,
    setExistingUser,
    handleGetAllUsers,
    handleDeleteUser,
  };
}
