import useForm from "../../forms/hooks/useForm";
import createUserSchema from "../models/createUserSchema";
import initialCreateUserForm from "../helpers/initialForms/initialCreateUserForm";
import CreateUserForm from "../components/CreateUserForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

export default function CreateUserPage() {
  const { handleCreateUser, error, isLoading } = useUsers();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCreateUserForm, createUserSchema, handleCreateUser);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateUserForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"create user form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}
