import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Card, Button, CardHeader, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

const Content = () => {
  const { user } = useContext(UserContext);
  // console.log(user.events);
  return (
    <div className="dashboard-content">
      <h1>Your Upcoming Events</h1>

      <div className="dashboard-eventCards">
        {user.events ? (
          user.events
            .filter(event => event.attending)
            .map(event => (
              <Card className="eventCard">
                
                <CardHeader>{event.event_name}</CardHeader>
                
                <CardTitle className="eventAddress">{event.address + " " + event.city + ", " + event.state}</CardTitle>

                <CardSubtitle className="eventTime">{event.date.slice(5, 10) + "-" + event.date.slice(0, 4)} @{" "}
                  {event.time.slice(0, 2) > 12
                    ? event.time.slice(0, 2) -
                      12 +
                      ":" +
                      event.time.slice(3, 5) +
                      "PM"
                    : event.time.slice(0, 5) + "AM"}
                </CardSubtitle>

                <CardText className="eventDescription">{event.description}</CardText>
                <CardText className="eventDetailsLink"><Link to={`/Events/${event.event_id}`}>View Event Details</Link></CardText>

              </Card>
            ))
        ) : (
          <h3>No Upcoming Events</h3>
        )}
      </div>
      
      <div className="dashboard-pastevents">
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
    </div>
  );
};

export default Content;
