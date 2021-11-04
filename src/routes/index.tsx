import { Route, Switch } from "react-router";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
