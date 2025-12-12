import { Box } from "@mui/material";

export default function Main({ children }) {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        padding: "5px",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
}
