import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

const Routes = () => {
      return (
            <Switch>
                  <Route exact path="/">
                        <Home/>
                  </Route>
                  <Route exact path="/login">
                        <Login/>
                  </Route>
                  <Route path="/cart">
                        <Cart/>
                  </Route>
            </Switch>
      )
}

export default Routes