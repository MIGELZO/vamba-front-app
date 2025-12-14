import { useCallback, useState } from "react";
import {
  createNewUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../services/usersApiService";
import ROUTES from "../../routs/routsModel";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
import normalizeUser from "../helpers/normalizatopn/normalizedUser";
import normalizedExistingUser from "../helpers/normalizatopn/normalizedExistingUser";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { snackbarActivation } = useSnackbar();

  const handleCreateUser = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await createNewUser(normalizedUser);
      } catch (error) {
        setError(error.message);
        snackbarActivation("error", error.message, "filled");
      }
      setIsLoading(false);
      snackbarActivation("success", "User created successfully", "filled");
      navigate(ROUTES.HOME_PAGE);
    },
    [snackbarActivation, navigate]
  );

  const handleUpdateUser = useCallback(
    async (user, userFromClient) => {
      setIsLoading(true);

      try {
        const normalizedUser = await updateUser(
          user.id,
          normalizedExistingUser(userFromClient)
        );
        snackbarActivation(
          "success",
          `${normalizedUser.firstName} your details has been successfully updated`
        );
      } catch (error) {
        setError(error.message);
      }
      navigate(ROUTES.ROOT);
      setIsLoading(false);
    },
    [snackbarActivation, navigate]
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
        const data = await deleteUser(user.id);
        snackbarActivation(
          "success",
          `You deleted user:${user.firstName} successfully`
        );
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return data;
      } catch (error) {
        setError(error.message);
      }
    },
    [snackbarActivation]
  );

  return {
    error,
    isLoading,
    handleCreateUser,
    handleUpdateUser,
    handleGetAllUsers,
    handleDeleteUser,
  };
}
