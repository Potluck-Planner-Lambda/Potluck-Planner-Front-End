import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UserPage.scss";
import axios from "axios";
export default function UserPage(props) {
  //Will eventually refactor page to take in user id from params.match and get() that based on id.

  const axiosWithAuth = () =>
    axios.create({
      baseURL: "https://potluck-planner-bw.herokuapp.com/users/",
      headers: {
        authorization: localStorage.getItem("token")
      }
    });

  // const [user, setUser] = useState(props.user);
  const [user, setUser] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then(res => {
        // console.log(res.data);
        setUser(res.data[0]);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(users[0]);
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}
