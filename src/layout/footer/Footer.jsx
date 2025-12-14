import { Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      elevation={3}
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 1 }}
    >
      כאן אפשר לראות פוטר לא מושקע בעליל
    </Paper>
  );
}
