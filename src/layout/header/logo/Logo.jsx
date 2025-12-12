import { Typography } from "@mui/material";
import ROUTES from "../../../routs/routsModel";
import NavBarLink from "../../../routs/components/NavBarLink";

export default function Logo() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "fantasy",
          mr: 2,
          display: { xs: "none", sm: "inline-flex" },
        }}
      >
        Vamba
      </Typography>
    </NavBarLink>
  );
}
