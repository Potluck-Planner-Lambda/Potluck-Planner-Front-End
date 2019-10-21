import React, { useState, useEffect, useContext } from "react";
import EventGuests from "./EventGuests";
import EventRecipes from "./EventRecipes";
import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export default function EventCard(props) {
  const [event, setEvent] = useState({});
  const { user } = useContext(UserContext);
  const attend = () => {
    // console.log("I want to attend: " + user.username + " " + user.user_id);
    axiosWithAuth()
      .post(`events/${props.id}/guests`, {
        user_id: user.user_id,
        attending: true
      })
      .then(res => {
        console.log(res.data);
        setEvent({guests:res.data});
      })
      .catch(err => console.error(err));
  };
  const unattend = () => {
    // console.log(
    //   "I don't want to attend: " + user.username + " " + user.user_id
    // );
    axiosWithAuth()
      .put(`events/${props.id}/guests/${user.user_id}`, {
        attending: false
      })
      .then(res => {
        console.log(res.data);
        setEvent({guests:res.data});
      })
      .catch(err => console.error(err));
  };
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
      <button onClick={attend}>RSVP</button>
      <button onClick={unattend}>Cancel RSVP</button>
    </div>
  );
}
