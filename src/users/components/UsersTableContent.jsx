import {
  Button,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAlert } from "../../providers/AlertProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";
import userToModelForTable from "../helpers/initialForms/userToModelForTable";

export default function UsersTableContent({ user, handleDeleteUser }) {
  const { alertActivation } = useAlert();
  const navigate = useNavigate();
  const userToShow = userToModelForTable(user);

  const handleEditUser = () => {
    navigate(ROUTES.EDIT_USER, {
      state: { user },
    });
  };

  const confirmDelete = () => {
    alertActivation(
      "error",
      "Delete Confirmation",
      `Are you sure you want to delete ${userToShow.firstName} ${userToShow.lastName}?`,
      () => handleDeleteUser(user)
    );
  };

  return (
    <TableRow key={userToShow.id}>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${userToShow.personalId}`}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${userToShow.firstName} ${userToShow.lastName}`}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "150px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{userToShow.email}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "120px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{userToShow.birthDate}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${userToShow.gender}`}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${userToShow.phone}`}</Typography>
      </TableCell>
      <TableCell>
        <Button onClick={handleEditUser}>
          <Tooltip title="Edit" TransitionComponent={Zoom} arrow>
            <EditIcon />
          </Tooltip>
        </Button>
      </TableCell>
      <TableCell>
        <Button onClick={confirmDelete} sx={{ color: "red" }}>
          <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
            <DeleteIcon />
          </Tooltip>
        </Button>
      </TableCell>
    </TableRow>
  );
}
