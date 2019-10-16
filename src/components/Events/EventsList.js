import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventsList.scss";
import axios from "axios";
export default function EventsList() {
  const axiosWithAuth = () =>
    axios.create({
      baseURL: "https://potluck-planner-bw.herokuapp.com/events/",
      headers: {
        authorization: localStorage.getItem("token")
      }
    });

  const [events, setEvents] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then(res => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(events[0]);
  return (
    <div>
      {events.map(event => (
        <EventCard event={event} />
      ))}
    </div>
  );
}
