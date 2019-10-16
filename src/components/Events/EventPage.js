import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventPage.scss";
import axios from "axios";
export default function EventPage(props) {
  //Will eventually refactor page to take in user id from params.match and get() that based on id.

  const axiosWithAuth = () =>
    axios.create({
      baseURL: "https://potluck-planner-bw.herokuapp.com/events/",
      headers: {
        authorization: localStorage.getItem("token")
      }
    });

  // const [event, setEvent] = useState(props.event);
  const [event, setEvent] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then(res => {
        // console.log(res.data);
        setEvent(res.data[0]);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(users[0]);
  return (
    <div>
      <EventCard event={event} />
    </div>
  );
}
