import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventPage.scss";
import Sidebar from "../Dashboard/Sidebar";
// import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export default function EventPage(props) {
  //Will eventually refactor page to take in events id from params.match and get() that based on id.
  // console.log(props.match.params.id);
  //Will eventually comment out to use imported axiosWithAuth
  // const axiosWithAuth = () =>
  //   axios.create({
  //     baseURL: "https://potluck-planner-bw.herokuapp.com/events/",
  //     headers: {
  //       authorization: localStorage.getItem("token")
  //     }
  //   });

  // const [event, setEvent] = useState(props.event);
  const [event, setEvent] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`events/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        setEvent(res.data);
      })
      .catch(err => console.error(err));
  }, [props.match.params.id]);

  // console.log(users[0]);
  return (
    <div className="mainEventPage">
      <Sidebar />
      <div className="mainContent">
        <EventCard event={event} id={props.match.params.id} />
      </div>
    </div>
  );
}
