import React from "react";
import { Link } from "react-router-dom";
export default function UserEvents(props) {
  const events = props.events;
  // console.log(typeof events);
  if (events.length !== undefined && typeof events !== "string") {
    const attendingEvents = events.filter(event => event.attending);
    if (attendingEvents.length > 0) {
      return (
        <div>
          <h4>Upcoming Events:</h4>
          {attendingEvents.map(event => (
            <p key={event.event_id}>
              <Link to={`/Events/${event.event_id}`}>{event.event_name}</Link>
            </p>
          ))}
        </div>
      );
    } else {
      return <p>Not attending any upcoming events</p>;
    }
  } else if (typeof events == "string") {
    return <p>{events}</p>;
  } else {
    return <p>Not attending any upcoming events</p>;
  }
}
