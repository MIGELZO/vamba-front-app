import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={10}
      sx={{
        backgroundColor: "#e29829ff",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
      </Toolbar>
    </AppBar>
  );
}
