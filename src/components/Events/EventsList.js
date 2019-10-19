import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventsList.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import {axiosWithAuth} from "../../utils/axiosWithAuth";
export default function EventsList() {
  //Will eventually comment out to use imported axiosWithAuth
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
        // console.log(res.data);
        setEvents(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(events[0]);
  return (
    <div>
      {events.map(event => (
        <Link to={`/Events/${event.event_id}`}>
          <EventCard event={event} id={event.event_id} />
        </Link>
      ))}
    </div>
  );
}
