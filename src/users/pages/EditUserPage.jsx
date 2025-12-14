import { useEffect, useRef } from "react";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import { useAlert } from "../../providers/AlertProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import EditUserForm from "../components/EditUserForm";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import editUserSchema from "../models/editUserSchema";
import userToModel from "../helpers/initialForms/userToModel";
import ROUTES from "../../routs/routsModel";

export default function EditUserPage() {
  const { handleUpdateUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  const userRef = useRef(user);

  const {
    data,
    setData,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialEditForm, editUserSchema, (newUser) => {
    handleUpdateUser(userRef.current, newUser);
  });
  const { alertActivation } = useAlert();

  useEffect(() => {
    const user = userRef.current;
    if (user) {
      const modelUser = userToModel(user);
      setData(modelUser);
    } else {
      navigate(ROUTES.ROOT);
    }
  }, [setData, navigate]);

  const confirmEdit = () => {
    onSubmit(onSubmit);
  };

  if (error) return <Error errorMessage={error} />;
  if (isLoading) return <Spinner />;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditUserForm
        onSubmit={() => {
          alertActivation(
            "info",
            "Edit Confirmation",
            "Are you sure you want to save changes?",
            confirmEdit
          );
        }}
        onReset={handleReset}
        validateForm={validateForm}
        title={"edit form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}
