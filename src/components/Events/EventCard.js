import React, { useState, useEffect } from "react";
import EventGuests from "./EventGuests";
import EventRecipes from "./EventRecipes";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export default function EventCard(props) {
  const [event, setEvent] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`events/${props.id}`)
      // .get(`events/${props.event.event_id}`)
      .then(res => {
        // console.log(res.data);
        setEvent(res.data);
      })
      .catch(err => console.error(err));
  }, []);

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
  // console.log(event.recipes);
  // console.log(event.events);
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
      Recipes:
      <EventRecipes recipes={event.recipes} />
      Guests:
      <EventGuests guests={event.guests} />
    </div>
  );
}
