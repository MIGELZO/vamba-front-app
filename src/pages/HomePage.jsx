import { Box, Typography, Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import UsersTable from "../users/components/UsersTable";

const HomePage = () => {
  return (
    <>
      <PageHeader title="Welcome to Vamba project" />
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 4 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            <strong>Here you can store your Vamba customer list</strong>
          </Typography>
        </Box>
        <UsersTable />
      </Container>
    </>
  );
};

export default HomePage;
