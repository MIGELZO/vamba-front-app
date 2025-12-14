import { useEffect, useRef, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Zoom,
  Tooltip,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import PageHeader from "../../components/PageHeader";

import ROUTES from "../../routs/routsModel";
import UsersTableContent from "./UsersTableContent";

export default function UsersTable() {
  const { handleDeleteUser, handleGetAllUsers, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const getData = async () => {
      const data = await handleGetAllUsers();
      setUsersData(data);
    };
    getData();
  }, [handleGetAllUsers]);

  if (error) return <Error errorMessage={error} />;
  if (isLoading) return <Spinner />;
  return (
    <Container maxWidth="xl">
      <PageHeader title="Users Table" />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Personal I.D</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>
                <Button onClick={() => navigate(ROUTES.CREATE_USER)}>
                  <Tooltip
                    title="Add Customer"
                    TransitionComponent={Zoom}
                    arrow
                  >
                    <AddCircleIcon />
                  </Tooltip>
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((user) => (
              <UsersTableContent
                key={user.id}
                user={user}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
