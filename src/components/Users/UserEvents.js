import React from "react";
import { Link } from "react-router-dom";
export default function UserEvents(props) {
  const events = props.events;
  // console.log(typeof events);
  if (events.length !== undefined && typeof events !== "string") {
    return (
      <div>
        <p>Events:</p>
        {events.map(event => (
          <Link to={`/Events/${event.event_id}`}>
            <p> {event.event_name}</p>
          </Link>
        ))}
      </div>
    );
  } else if (typeof events == "string") {
    return <p>{events}</p>;
  } else {
    return <p>Not attending any upcoming events</p>;
  }
}
