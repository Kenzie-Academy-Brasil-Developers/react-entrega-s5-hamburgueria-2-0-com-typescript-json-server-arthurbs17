import { IconButton, MenuItem } from "@mui/material";
import { Badge } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { Header, ButtonNav } from "./style";

const MenuNav = () => {
  return (
    <Header>
      <ButtonNav>
        Burguer <span>Kenzie</span>
      </ButtonNav>
      <MenuItem>
        <IconButton size="medium" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton>
          <Logout />
        </IconButton>
      </MenuItem>
    </Header>
  );
};

export default MenuNav;
