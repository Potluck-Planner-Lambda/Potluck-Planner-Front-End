import React from "react";
import EventGuest from "./EventGuest";
export default function EventGuests(props) {
  // console.log(props.guests);
  if (props.guests !== undefined) {
    // console.log(props.guests);
    return props.guests.filter(guest=>guest.attending).map(guest => <EventGuest guest={guest} />);
  } else {
    return <div>No Guests Signed Up</div>;
  }
}
