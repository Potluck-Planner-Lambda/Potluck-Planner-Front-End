import React from "react";

export default function UserEvents(props) {
  const events = props.UserEvents;
  console.log(events);
  if (events != undefined) {
    return (
      <div>
        <p>{events.map(event => event.event_name)}</p>
      </div>
    );
  } else {
    return <p>Not attending any upcoming events</p>;
  }
}
