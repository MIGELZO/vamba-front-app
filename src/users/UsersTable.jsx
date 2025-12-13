import { useEffect, useRef, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import useUsers from "../users/hooks/useUsers";
// import { getUser } from "../users/services/localStorageService";
// import Error from "../components/Error";
// import Spinner from "../components/Spinner";
import PageHeader from "../components/PageHeader";
import UsersTableContent from "./UsersTableContent";
// import UsersTableContent from "./UsersTableContent";
// import ROUTES from "../routs/routsModel";

export default function UsersTable() {
  const {
    // handleDeleteUser,
    handleGetAllUsers,
    // error,
    // isLoading,
  } = useUsers();
  // const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  // const handleChangeCheckBox = handleChangeBusinessStatus;
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

  // if (error) return <Error errorMessage={error} />;
  // if (isLoading) return <Spinner />;
  // if (usersData.length > 0) {
  return (
    <Container maxWidth="xl">
      <PageHeader
        title="Users Table"
        subtitle="Here you can view users details and update Business state"
      />
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
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((user) => (
              <UsersTableContent
                key={user._id}
                user={user}
                // handleDeleteUser={handleDeleteUser}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

// return null;
// }
