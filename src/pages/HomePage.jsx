import { Box, Typography, Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import UsersTable from "../users/UsersTable";

const HomePage = () => {
  return (
    <>
      <PageHeader
        title="Welcome to Daniel Business Cards"
        subtitle="Free and fun website for businesses advertising"
      />
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 4 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            <strong>Explore our users designs</strong>
          </Typography>
        </Box>
        <UsersTable />
      </Container>
    </>
  );
};

export default HomePage;
