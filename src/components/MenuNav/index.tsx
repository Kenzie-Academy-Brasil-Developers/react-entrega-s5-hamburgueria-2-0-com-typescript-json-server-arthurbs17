import { IconButton, MenuItem } from "@mui/material";
import { Badge } from "@mui/material";
import { Login, Logout, ShoppingCart } from "@mui/icons-material";
import { Header, ButtonNav } from "./style";
import { useAuth } from "../../Providers/auth";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

const MenuNav = () => {
  const { authToken, logOut } = useAuth();
  const [status, setStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (authToken !== "") {
      setStatus(true);
    }
  }, [authToken]);

  return (
    <Header>
      <ButtonNav onClick={() => history.push("/home")}>
        Burguer <span>Kenzie</span>
      </ButtonNav>
      <MenuItem>
        <IconButton
          onClick={() => history.push("/cart")}
          size="medium"
          color="inherit"
        >
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {status === true ? (
          <IconButton onClick={() => logOut()}>
            <Logout />
          </IconButton>
        ) : (
          <IconButton onClick={() => history.push("/login")}>
            <Login />
          </IconButton>
        )}
      </MenuItem>
    </Header>
  );
};

export default MenuNav;
