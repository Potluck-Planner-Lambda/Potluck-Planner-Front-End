import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
const Content = () => {
  const { user } = useContext(UserContext);
  // console.log(user.events);
  return (
    <div className="dashboard-content">
      <h1>Your Upcoming Events</h1>
      {user.events ? (
        user.events
          .filter(event => event.attending)
          .map(event => (
            <div>
              <Link to={`/Events/${event.event_id}`}>
                <h3>{event.event_name}</h3>
              </Link>
              <p>
                {event.date.slice(5, 10)} @{" "}
                {event.time.slice(0, 2) > 12
                  ? event.time.slice(0, 2) -
                    12 +
                    ":" +
                    event.time.slice(3, 5) +
                    "PM"
                  : event.time.slice(0, 5) + "AM"}
              </p>
            </div>
          ))
      ) : (
        <h3>No Upcoming Events</h3>
      )}

      <h1>Your Past Events</h1>
      {/* Use the following guideline to figure out how to determine event time in milliseconds compared to current time and figure out past events */}
      {/* Edit the following filter snippet: */}
      {/* {user.events ? (
        user.events
          .filter(event => event.attending && event.data - Date() < 0)
          .map(event => (
            <p>
              {event.date.slice(5, 10)} @{" "}
              {event.time.slice(0, 2) > 12
                ? event.time.slice(0, 2) -
                  12 +
                  ":" +
                  event.time.slice(3, 5) +
                  "PM"
                : event.time.slice(0, 5) + "AM"}
            </p>
          ))
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Content;
