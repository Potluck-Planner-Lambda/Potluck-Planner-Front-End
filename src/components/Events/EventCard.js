import React, { useState, useEffect, useContext } from "react";
import EventGuests from "./EventGuests";
import EventRecipes from "./EventRecipes";
import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export default function EventCard(props) {
  const [event, setEvent] = useState({ time: "", date: "" });
  const { user } = useContext(UserContext);
  const [organizer, setOrganizer] = useState("");
  const [guests, setGuests] = useState(false);
  const attend = () => {
    // console.log("I want to attend: " + user.username + " " + user.user_id);
    axiosWithAuth()
      .post(`events/${props.id}/guests`, {
        user_id: user.user_id,
        attending: true
      })
      .then(res => {
        console.log(res.data);
        setEvent({ guests: res.data });
        setGuests(!guests);
      })
      .catch(err => console.error(err));
  };
  const unAttend = () => {
    // console.log(
    //   "I don't want to attend: " + user.username + " " + user.user_id
    // );
    axiosWithAuth()
      .put(`events/${props.id}/guests/${user.user_id}`, {
        attending: false
      })
      .then(res => {
        console.log(res.data);
        setEvent({ guests: res.data });
        setGuests(!guests);
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`events/${props.id}`)
      // .get(`events/${props.event.event_id}`)
      .then(res => {
        console.log(res.data);
        setEvent(res.data);
        setGuests(
          res.data.guests.filter(
            guest => user.user_id == guest.user_id && guest.attending
          ).length > 0
        );
        axiosWithAuth()
          .get(`users/${res.data.organizer_id}`)
          .then(response => {
            console.log(response.data);
            setOrganizer(response.data.full_name);
          })
          .catch(errR => console.error(errR));
      })
      .catch(err => console.error(err));
  }, [props.id]);

  const {
    // event_id,
    event_name,
    address,
    city,
    // date,
    description,
    // organizer_id,
    state
    // time
  } = props.event;
  // console.log(event.recipes);
  // console.log(event.events);
  // console.log(event_id, event_name, address, city, date, description, organizer_id, state, time);
  // console.log(event.guests);
  // let buttons = <button onClick={attend}>RSVP</button>
  const attendBtn = <button onClick={attend}>RSVP</button>;
  const unAttendBtn = <button onClick={unAttend}>Cancel RSVP</button>;
  return (
    <div className="EventCard">
      <h3 className="title">{event_name}</h3>
      <p className="who">{"Host: " + organizer}</p>
      <p className="where">
        {event.date.slice(5, 10) + "-" + event.date.slice(0, 4)} @{" "}
        {event.time.slice(0, 2) > 12
          ? event.time.slice(0, 2) - 12 + ":" + event.time.slice(3, 5) + "PM"
          : event.time.slice(0, 5) + "AM"}
      </p>
      <p className="where">
        {address + " "}
        <br />
        {city + ", " + state}
      </p>
      <p className="what">{description}</p>
      <h4>Recipes:</h4>
      <EventRecipes recipes={event.recipes} />
      <h4>Guests:</h4>
      <EventGuests guests={event.guests} />
      {guests ? unAttendBtn : attendBtn}
    </div>
  );
}
