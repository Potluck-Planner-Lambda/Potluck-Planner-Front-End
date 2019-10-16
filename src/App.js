import React, { useContext } from "react";
import "./App.css";
import UserContext from "./contexts/UserContext";
import EventContext from "./contexts/EventContext";

function App() {
  const event = useContext(EventContext);
  const user = useContext(UserContext);

  return (
    <EventContext.Provider value={event}>
      <UserContext.Provider value={user}>
        <div className="App">
          <h1>In Playground.</h1>
        </div>
      </UserContext.Provider>
    </EventContext.Provider>
  );
}

export default App;
