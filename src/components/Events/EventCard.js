import React from "react";

export default function EventCard(props) {
  const {
    event_id,
    event_name,
    address,
    city,
    date,
    description,
    organizer_id,
    state,
    time
  } = props.event;
  // console.log(event_id, event_name, address, city, date, description, organizer_id, state, time);
  return (
    <div className="EventCard">
      <h3 className="title">{event_name}</h3>
      <p className="when">{time + " " + date}</p>
      <p className="what">{description}</p>
      <p className="where">{address + " " + city + " " + state}</p>
      <p className="who">
        {"Event: " + event_id + " Organizer: " + organizer_id}
      </p>
    </div>
  );
}
