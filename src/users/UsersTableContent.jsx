import {
  Button,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
// import { useAlert } from "../providers/AlertProvider";

export default function UsersTableContent({ user, handleDeleteUser }) {
  // const { alertActivation } = useAlert();

  // const confirmDelete = () => {
  //   alertActivation(
  //     "info",
  //     "Delete Confirmation",
  //     `Are you sure you want to delete ${user.name.first} ${user.name.last}?`,
  //     () => handleDeleteUser(user)
  //   );
  // };
  // useEffect(() => {
  //     const
  //   }, []);

  return (
    <TableRow key={user._id}>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.personalId}`}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "150px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{user.email}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "120px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{user.birthDate}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.gender}`}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.phone}`}</Typography>
      </TableCell>
      <TableCell>
        <Button
          disabled={user.isAdmin}
          // onClick={confirmDelete}
          sx={{ color: "red" }}
        >
          <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
            <DeleteIcon />
          </Tooltip>
        </Button>
      </TableCell>
    </TableRow>
  );
}
