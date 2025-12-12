import { Avatar, IconButton } from "@mui/material";
import ROUTES from "../../../routs/routsModel";
import NavBarLink from "../../../routs/components/NavBarLink";

export default function LogoIcon() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <IconButton>
        <Avatar
          alt="business card icon"
          src="/assets/imgs/avatar.png"
          sx={{ border: "2px solid #DDEBF6", width: 40, height: 40 }}
        />
      </IconButton>
    </NavBarLink>
  );
}
