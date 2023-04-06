import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import User from "./user/pages/User";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlace from "./places/pages/UserPlace";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Authentication from "./Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  //setting the dependencies of the useCallback to an empty array to ensure the functions will never be recreated
  const login = useCallback(() => {
    setIsLoggedInState(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedInState(false);
  }, []);

  //setting the redirect functionality after login context has been executed
  let routes;

  if (isLoggedInState) {
    //defining the routes that should be accessed in when logged in
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/:userId/locations" exact>
          <UserPlace />
        </Route>
        <Route path="/locations/new" exact>
          <NewPlace />
        </Route>
        <Route path="/locations/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/:userId/locations" exact>
          <UserPlace />
        </Route>
        <Route path="/auth" exact>
          <Authentication />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedInState, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
