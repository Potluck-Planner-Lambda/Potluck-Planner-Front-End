import React from "react";

export default function UserEvents(props) {
  const events = props.events;
  // console.log(typeof events);
  if (events.length !== undefined && typeof events !== "string") {
    return (
      <div>
        <p>Events:</p>
        {events.map(event => (
          <p> {event.event_name}</p>
        ))}
      </div>
    );
  } else if (typeof events == "string") {
    return <p>{events}</p>;
  } else {
    return <p>Not attending any upcoming events</p>;
  }
}
