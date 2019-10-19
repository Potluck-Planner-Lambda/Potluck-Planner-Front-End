import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
// import UserEvents from "./UserEvents";
import "./UserPage.scss";
// import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export default function UserPage(props) {
  //Will eventually refactor page to take in user id from params.match and get() that based on id.

  //Will eventually comment out to use imported axiosWithAuth
  // const axiosWithAuth = () =>
  //   axios.create({
  //     baseURL: "https://potluck-planner-bw.herokuapp.com/users/",
  //     headers: {
  //       authorization: localStorage.getItem("token")
  //     }
  //   });

  // const [user, setUser] = useState(props.user);
  console.log(props);
  const [user, setUser] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(users[0]);
  return (
    <div>
      {/* <UserCard user={user} />
      <UserEvents UserEvents={user.events} /> */}
      <UserCard
        user={user}
        UserEvents={user.events}
        id={props.match.params.id}
      />
    </div>
  );
}
