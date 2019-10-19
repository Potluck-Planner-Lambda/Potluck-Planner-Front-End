import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import EventContext, { EventProvider } from "./contexts/EventContext";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Dashboard/Home";
import CreateAccount from "./components/CreateAccount/CreateAccount";
// import Login from "./components/Login/Login";
import LoginFunctional from "./components/Login/LoginFunctional";
import UsersList from "./components/Users/UsersList";
import EventsList from "./components/Events/EventsList";
import EventPage from "./components/Events/EventPage";
import UserPage from "./components/Users/UserPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const event = useContext(EventContext);
  const [user, setUser] = useState({
    username: localStorage.getItem("username")
  });
  // useEffect(() => {
  //   setUser({ username: localStorage.getItem("username") });
  // }, []);
  return (
    <EventProvider value={event}>
      <UserProvider value={{ user, setUser }}>
        <div className="App">
          <Navigation />
          <Switch>
            <PrivateRoute exact path="/Home" component={Home} />
            <Route exact path="/" component={LoginFunctional} />
            <Route exact path="/CreateAnAccount" component={CreateAccount} />
            <PrivateRoute exact path="/Events" component={EventsList} />
            <PrivateRoute path="/Events/:id" component={EventPage} />
            <PrivateRoute exact path="/Users" component={UsersList} />
            <PrivateRoute exact path="/Users/:id" component={UserPage} />
          </Switch>
        </div>
      </UserProvider>
    </EventProvider>
  );
}

export default App;
